## Zenoss API: Creating Portable Monitoring Dashboards

The SpinDance hosting team manages numerous applications across dozens of servers. An invaluable tool for us is our monitoring dashboards: large TVs mounted on the walls that display important server and application information for everyone to see. These help us notice unhealthy trends emerging before Zenoss alerts us of any specific issue. Here’s an example of one server from one of our dashboards. We can see that CPU is running a bit hot, but load average and memory use are looking good.

![dashboard](/public/images/cpu-load-ram.png)

The data for these servers comes from Zenoss, but it is currently being accessed in a really ugly way: a PHP web page makes an AJAX call to a different PHP page that executes a Python script to read data from the RRD files where Zenoss stores it. Not only is this a difficult to maintain mess, but it forces the websites to be hosted on the Zenoss server, which is not very ideal. Also, no one on the team wants to maintain PHP things because PHP is gross. Yuck!

All of these problems can be solved by pulling the data from Zenoss’ API instead. My goal is to make a new dashboard to monitor server metrics that can be hosted anywhere, that’s easy to maintain, and that doesn’t use PHP. How to display the data is a non-trivial consideration, but a bit out of scope of this blog–I intend to focus more on acquiring the data than on presenting it.

Disclaimer: We use Zenoss 4.2.4, and I haven’t verified this process on any other version.

#### Step 1: Verify the necessary data points

To begin, we’ll need to make sure all of the necessary data exists in Zenoss. Here’s a table with most of the data I wanted:

Name|Type|Source|Description
--|--|--|--
ssCpuIdle | SNMP | 1.3.6.1.4.1.2021.11.11.0 | % of cpu idle
laLoadInt1 | SNMP | 1.3.6.1.4.1.2021.10.1.5.1 | 1 minute load average
memTotalReal | SNMP | 1.3.6.1.4.1.2021.4.5.0 | total server memory
memAvailReal | SNMP | 1.3.6.1.4.1.2021.4.6.0 | free server memory
memCached | SNMP | 1.3.6.1.4.1.2021.4.15.0 | cached server memory

Most of the data I need already existed under a monitoring template called Device. Any that are missing can easily be added in, and don’t forget to add the template to the devices you wanted to monitor.

#### Step 2: Find the API endpoints

Most of what I’ve learned about the Zenoss API has come from using [zendmd](https://support.zenoss.com/hc/en-us/articles/202946755-An-Introduction-to-zendmd). The linked article mentions that Zenoss URLs correspond with Python objects accessible using zendmd. As an example, I’ll try to look up a server called dev-sg which has a Zenoss URL of */zport/dmd/Devices/Server/Linux/devices/dev-sg*. We can access this server in zendmd as follows:

```python
>>> devices.Server.Linux.devices.findObjectsById('dev-sg')[0]
<Device at /zport/dmd/Devices/Server/Linux/devices/dev-sg>
```

If we save that to a variable, we can use tab-completion to see which methods we can call on it:

```python
>>> d = devices.Server.Linux.devices.findObjectsById('dev-sg')[0]
>>> d.
Display all 643 possibilities? (y or n)
```

Hoo boy. That’s a lot of possibilities. While I do think it’s useful to look at the options and poke and prod around, for brevity sake, I’ll cut to the chase. Zenoss stores the data from monitoring templates in RRD files, so the method we need is 'getRRDValue'. It takes the name of an RRD file as its parameter. Zenoss’ convention for naming RRD files is <data source>\_<data point>.rrd, so I need to pass 'ssCpuIdle\_ssCpuIdle' to find the idle CPU percent.

```python
>>> d.getRRDValue('ssCpuIdle_ssCpuIdle')
97.84
```

The correspondence between Zenoss URLs and zendmd that we started with works in reverse, too, so I can find that same value in a browser by going to <zenoss url>/zport/dmd/Devices/Server/Linux/devices/dev-sg/getRRDValue?dsname=ssCpuIdle_ssCpuIdle. The method name gets added to the device URL, and we pass the parameters as a query string. The general pattern is <Zenoss object url>/<method_name>?<parameter_name>=<parameter_value>. I found the name of the parameter for getRRDValue using the help function in zendmd:

```python
>>> help(d.getRRDValue)

getRRDValue(self, dsname, start=None, end=None, function='LAST', format='%.2lf', extraRpn='', cf='AVERAGE') method of Products.ZenModel.Device.Device instance
    Return a single rrd value from its file using function.
```

#### Step 3: Accessing the data with JavaScript
Now that we know we can access our data from a browser, it should be a simple matter to access it via JavaScript. I’ll be using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for http requests, because it’s built in and I don’t care about IE support, but [jQuery.ajax](http://api.jquery.com/jquery.ajax/) works just as well.

**A note on security**: in order for this to work, the browser will need to authenticate against the Zenoss server. This means anyone accessing the page will be able to extract the credentials. This isn’t a concern for me because my dashboards are hosted internally and are only accessible by users who already have access to Zenoss. If you need to avoid this, you will need some server component that handles the authorizing and passes the data from Zenoss to your web page.

The first thing we’ll need to do is create the authorization header. To create this, we need to base64-encode the user credentials. I’ve done this using the Chrome developer tools console and the [btoa function](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa):

```javascript
> btoa('username:password')
"dXNlcm5hbWU6cGFzc3dvcmQ="
```

Obviously use your own user and password, and don’t forget the colon. Then, at the top of your JavaScript file, we can set up some constants:

```javascript
var zUrl = 'https://zenoss.example.com'
var zAH = new Headers()
zAH.append('Authorization', 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=')
var defaultInit = {
  headers: zAH
}
```

I like to define a generic wrapper function for http requests:

```javascript
function fetchZenossRrd (device, dsname) {
  return fetch(zUrl + device + '/getRRDValue?dsname=' + dsname, defaultInit)
  .then(function (response) {
    return response.text()
  })
}
```

That way, I only need to pass in the device URL and the datapoint I want in order to get the data:

```javascript
var device = '/zport/dmd/Devices/Server/Linux/devices/dev-sg'
var datapoint = 'ssCpuIdle_ssCpuIdle'

fetchZenossRrd(device, datapoint)
.then(function (data) {
  // do stuff with the data here
})
```

Once you’ve successfully retrieved the data, you can format and display it however you choose. I’ll be displaying mine like this:

![dashboard #2](/public/images/dev-sg-dashboard.png)

#### Step 4+: Extra Credit

If you know how to get one data point from Zenoss, you can know how to get them all, and if you know how to create custom monitoring templates, you’ll know how to get any data on the server into a Zenoss data point. However, I’ve got a couple more tricks I can share from my experience:

* To display used CPU, I calculate `1 – idleCPU` and display it as a percent.
* To display a "close enough" estimate of used Mem, I fetch total memory, free memory, and cached memory. Then I calculate `total – (free + cached) / total` and display it as a percent.
* To display disk usage, I fetch used disk space and total disk space, divide, and display as a percent.
  * I could get this information from the server object using getRRDValue, but instead I get them from the filesystem object directly at: **/zport/dmd/Devices/Server/Linux/devices/dev-sg/os/filesystems/-/totalBytes** and **/zport/dmd/Devices/Server/Linux/devices/dev-sg/os/filesystems/-/usedBytes**.
* Load average is as simple as displaying the value from Zenoss, but to determine reasonable thresholds, I needed to know the number of CPUs the server has. We can get that info by requesting **/zport/dmd/Devices/Server/Linux/devices/dev-sg/hw/cpus**. That returns a string-ified array of CPU objects. I convert it back to an array by splitting it on ',', and the length of the resulting array is the number of CPUs.
* Depending on your Zenoss server organization, you can probably increase maintainability of this substantially by dynamically fetching the device URL instead of hardcoding it:

```javascript
var device = 'dev-sg'

function fetchDevicePath(device) {
  fetch(zUrl + '/zport/dmd/Devices/findDevicePath?devicename=' + device, defaultInit)
  .then(function (response) {
    return response.text()
  })
}

fetchDevicePath('dev-sg')
// returns /zport/dmd/Devices/Server/Linux/devices/dev-sg
```

Notes:
1. A small caveat: if you do host your dashboards off the Zenoss server, you will probably need to enable Cross-Origin Resource Sharing (“CORS”) on the Zenoss server. More information is available at http://enable-cors.org/.
