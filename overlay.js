function resizePopup() {
	var viewportWidth = window.innerWidth;
	var viewportHeight = window.innerHeight;
	var pageWidth = document.body.clientWidth;
	document.getElementById('resume').width = 0.8 * Math.min(viewportWidth,pageWidth);
	document.getElementById('resume').height = Math.min(viewportHeight-100,1.1*pageWidth);
}

function openOverlay() {
	resizePopup();
	document.getElementById('overlay').style.display = 'block';
}

function closeOverlay() {
	document.getElementById('overlay').style.display = 'none';
}