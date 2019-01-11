import{a as t,b as e,c as r,d as n,e as a,f as o,g as s,h as i,i as c,j as l,k as u,l as f,m as h,n as p,o as d,p as m,q as v}from"./chunk.38028205.js";function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e){var h,p,d,m,v,g,y,_,S,E,b;if(r(this,e),this._state=t({},e.data),this._intro=!0,this._fragment=(this._state,{c(){h=n("header"),p=n("h1"),d=a("Michael Mosher"),m=a("\n\t"),v=n("h2"),g=n("span"),y=a("Software. "),_=n("span"),S=a("Systems. "),E=n("span"),b=a("Solutions."),this.h()},l(t){h=o(t,"HEADER",{class:!0},!1);var e=s(h);p=o(e,"H1",{class:!0},!1);var r=s(p);d=i(r,"Michael Mosher"),r.forEach(c),m=i(e,"\n\t"),v=o(e,"H2",{class:!0},!1);var n=s(v);g=o(n,"SPAN",{},!1);var a=s(g);y=i(a,"Software. "),a.forEach(c),_=o(n,"SPAN",{},!1);var l=s(_);S=i(l,"Systems. "),l.forEach(c),E=o(n,"SPAN",{},!1);var u=s(E);b=i(u,"Solutions."),u.forEach(c),n.forEach(c),e.forEach(c),this.h()},h(){p.className="svelte-19dgqji",v.className="svelte-19dgqji",h.className="svelte-19dgqji"},m(t,e){l(t,h,e),u(h,p),u(p,d),u(h,m),u(h,v),u(v,g),u(g,y),u(v,_),u(_,S),u(v,E),u(E,b)},p:f,d(t){t&&c(h)}}),e.target){var w=s(e.target);e.hydrate?this._fragment.l(w):this._fragment.c(),w.forEach(c),this._mount(e.target,e.anchor)}}function _(e){if(r(this,e),this._state=t({},e.data),this._intro=!0,this._fragment=function(e,r){var u,f,p,d,m=new y({root:e.root,store:e.store}),v=[r.child.props],g=r.child.component;function _(r){for(var n={},a=0;a<v.length;a+=1)n=t(n,v[a]);return{root:e.root,store:e.store,data:n}}if(g)var S=new g(_());return{c:function(){m._fragment.c(),u=a("\n"),f=n("main"),S&&S._fragment.c(),p=a("\n"),d=n("div"),this.h()},l:function(t){m._fragment.l(t),u=i(t,"\n"),f=o(t,"MAIN",{class:!0},!1);var e=s(f);S&&S._fragment.l(e),e.forEach(c),p=i(t,"\n"),d=o(t,"DIV",{class:!0},!1),s(d).forEach(c),this.h()},h:function(){f.className="svelte-guue3k",d.className="banner svelte-guue3k"},m:function(t,e){m._mount(t,e),l(t,u,e),l(t,f,e),S&&S._mount(f,null),l(t,p,e),l(t,d,e)},p:function(t,e){var r=t.child?h(v,[e.child.props]):{};g!==(g=e.child.component)?(S&&S.destroy(),g?((S=new g(_()))._fragment.c(),S._mount(f,null)):S=null):g&&S._set(r)},d:function(t){m.destroy(t),t&&(c(u),c(f)),S&&S.destroy(),t&&(c(p),c(d))}}}(this,this._state),e.target){var u=s(e.target);e.hydrate?this._fragment.l(u):this._fragment.c(),u.forEach(c),this._mount(e.target,e.anchor),p(this)}}t(y.prototype,e),t(_.prototype,e);var S=!1;function E(t,e){var r,f,h,p,v,g,y,_,E,b=e.error.message;document.title=r=e.status;var w=S&&e.error.stack&&function(t,e){var r,f,h=e.error.stack;return{c:function(){r=n("pre"),f=a(h)},l:function(t){r=o(t,"PRE",{},!1);var e=s(r);f=i(e,h),e.forEach(c)},m:function(t,e){l(t,r,e),u(r,f)},p:function(t,e){t.error&&h!==(h=e.error.stack)&&m(f,h)},d:function(t){t&&c(r)}}}(0,e);return{c:function(){f=a("\n\n"),h=n("h1"),p=a(e.status),v=a("\n\n"),g=n("p"),y=a(b),_=a("\n\n"),w&&w.c(),E=d(),this.h()},l:function(t){f=i(t,"\n\n"),h=o(t,"H1",{class:!0},!1);var r=s(h);p=i(r,e.status),r.forEach(c),v=i(t,"\n\n"),g=o(t,"P",{class:!0},!1);var n=s(g);y=i(n,b),n.forEach(c),_=i(t,"\n\n"),w&&w.l(t),E=d(),this.h()},h:function(){h.className="svelte-8od9u6",g.className="svelte-8od9u6"},m:function(t,e){l(t,f,e),l(t,h,e),u(h,p),l(t,v,e),l(t,g,e),u(g,y),l(t,_,e),w&&w.m(t,e),l(t,E,e)},p:function(t,e){t.status&&r!==(r=e.status)&&(document.title=r),t.status&&m(p,e.status),t.error&&b!==(b=e.error.message)&&m(y,b),w&&(w.d(1),w=null)},d:function(t){t&&(c(f),c(h),c(v),c(g),c(_)),w&&w.d(t),t&&c(E)}}}function b(e){if(r(this,e),this._state=t({},e.data),this._intro=!0,this._fragment=E(0,this._state),e.target){var n=s(e.target);e.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(c),this._mount(e.target,e.anchor)}}t(b.prototype,e);var w,P,q,j,R,A,N=[],C=[{js:function(){return import("./chunk.1504f022.js")},css:["chunk.1504f022.css"]}],O=[{pattern:/^\/?$/,parts:[{i:0}]}],k=!1,x=[],L={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}},U=null;var I,D=1;var H,M,T,V,K="undefined"!=typeof __SAPPER__&&__SAPPER__,B="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},J={};function G(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(K.baseUrl))return null;var e=t.pathname.slice(K.baseUrl.length);if(!N.some(function(t){return t.test(e)}))for(var r=0;r<O.length;r+=1){var n=O[r],a=n.pattern.exec(e);if(a){var o=function(){var r=Object.create(null);return t.search.length>0&&t.search.slice(1).split("&").forEach(function(t){var e=g(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t)),3),n=e[1],a=e[2];a=(a||"").replace(/\+/g," "),"string"==typeof r[n]&&(r[n]=[r[n]]),"object"===v(r[n])?r[n].push(a):r[n]=a}),{v:{url:t,path:e,page:n,match:a,query:r}}}();if("object"===v(o))return o.v}}}function W(){return{x:pageXOffset,y:pageYOffset}}function X(t,e,r,n){if(e)I=e;else{var a=W();J[I]=a,e=I=++D,J[I]=r?a:{x:0,y:0}}I=e,w&&w.set({preloading:!0});var o=U&&U.href===t.url.href?U.promise:$(t);U=null;var s=P={};return o.then(function(t){var a=t.redirect,o=t.data,i=t.nullable_depth;if(a)return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=G(new URL(t,document.baseURI));return r?(B[e.replaceState?"replaceState":"pushState"]({id:I},"",t),X(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}(a.location,{replaceState:!0});Y(o,i,J[e],r,n,s),document.activeElement&&document.activeElement.blur()})}function Y(t,e,r,n,a,o){if(P===o){if(w){for(var s=t.child,i=0;i<e&&i!==e;i+=1)s=s.props.child;var c=s.component;s.component=null,w.set({child:t.child}),s.component=c,w.set(t)}else{var l=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end");if(l&&u){for(;l.nextSibling!==u;)F(l.nextSibling);F(l),F(u)}Object.assign(t,j),w=new _({target:A,data:t,store:R,hydrate:!0})}if(!n){if(a){var f=document.querySelector(a);f&&(r={x:0,y:f.getBoundingClientRect().top})}J[I]=r,r&&scrollTo(r.x,r.y)}Object.assign(L,t),k=!0}}function $(t){for(var e=t.page,r=t.path,n=t.query,a=r.split("/").filter(Boolean),o=0;x[o]&&a[o]&&x[o]===a[o];)o+=1;var s=null,i=null,c={store:R,fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:function(t,e){i={statusCode:t,message:e}}};return q||(q=_.preload?K.preloaded[0]||_.preload.call(c,{path:r,query:n,params:{}}):{}),Promise.all(e.parts.map(function(e,a){return a<o?null:e?(s=C[e.i],i="string"==typeof s.css?[]:s.css.map(z),i.unshift(s.js()),Promise.all(i).then(function(t){return t[0].default})).then(function(o){var s,i={path:r,query:n,params:e.params?e.params(t.match):{}};return s=k||!K.preloaded[a+1]?o.preload?o.preload.call(c,i):{}:K.preloaded[a+1],Promise.resolve(s).then(function(t){return{Component:o,preloaded:t}})}):null;var s,i})).catch(function(t){return i={statusCode:500,message:t},[]}).then(function(t){return j?t:Promise.resolve(q).then(function(e){return j=e,t})}).then(function(c){if(s)return{redirect:s};x=a;var l=(e.parts[e.parts.length-1].params||function(){return{}})(t.match);if(i){var u={path:r,query:n,params:l,error:"string"==typeof i.message?new Error(i.message):i.message,status:i.statusCode};return{data:Object.assign({},u,{preloading:!1,child:{component:b,props:u}})}}var f={path:r,query:n,error:null,status:null},h={path:r,preloading:!1,child:Object.assign({},L.child,{segment:x[0]})};Q(n,L.query)&&(h.query=n),Q(l,L.params)&&(h.params=l);for(var p=h.child,d=0,m=0;m<e.parts.length;m+=1){var v=e.parts[m];if(v){var g=v.params||function(){return{}};m<o?(p.props.path=r,p.props.query=n,p.props.child=Object.assign({},p.props.child),d+=1):(p.component=c[m].Component,p.props=Object.assign({},p.props,f,{params:g(t.match)},c[m].preloaded),p.props.child={}),(p=p.props.child).segment=x[m+1]}}return{data:h,nullable_depth:d}})}function z(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function F(t){t.parentNode.removeChild(t)}function Q(t,e){return JSON.stringify(t)!==JSON.stringify(e)}function Z(t){var e=G(new URL(t,document.baseURI));if(e)return U&&t===U.href||function(t,e){U={href:t,promise:e}}(t,$(e)),U.promise}function tt(t){clearTimeout(H),H=setTimeout(function(){et(t)},20)}function et(t){var e=nt(t.target);e&&"prefetch"===e.rel&&Z(e.href)}function rt(t){if(1===function(t){return null===t.which?t.button:t.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=nt(t.target);if(e&&e.href){var r="object"===v(e.href)&&"SVGAnimatedString"===e.href.constructor.name,n=String(r?e.href.baseVal:e.href);if(n!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&(r?!e.target.baseVal:!e.target)){var a=new URL(n);if(a.pathname!==location.pathname||a.search!==location.search){var o=G(a);if(o)X(o,null,e.hasAttribute("sapper-noscroll"),a.hash),t.preventDefault(),B.pushState({id:I},"",a.href)}}}else location.hash||t.preventDefault()}}}function nt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function at(t){if(J[I]=W(),t.state){var e=G(new URL(location.href));e?X(e,t.state.id):location.href=location.href}else(function(t){I=t})(D=D+1),B.replaceState({id:I},"",location.href)}M={target:document.querySelector("#sapper")},"scrollRestoration"in B&&(B.scrollRestoration="manual"),T=M.target,A=T,M.store&&(V=M.store,R=V(K.store)),addEventListener("click",rt),addEventListener("popstate",at),addEventListener("touchstart",et),addEventListener("mousemove",tt),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;if(B.replaceState({id:D},"",r),!K.error){var n=G(new URL(location.href));if(n)return X(n,D,!1,e)}});
//# sourceMappingURL=client.741d4dc8.js.map
