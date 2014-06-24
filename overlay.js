function resizeResume() {
	res = document.getElementById('resume');
	res.width = 0.8 * window.innerWidth;
	res.height = 0.9 * window.innerHeight;
}

function openOverlay() {
	document.getElementById('overlay').style.visibility = 'visible';
	resizeResume();
}

function closeOverlay() {
	document.getElementById('overlay').style.visibility = 'hidden';
}



window.onkeydown = keydown;

function keydown(e) {
if(!e) e = event;

if (e.keyCode == 27) { /* Escape */
closeOverlay();
}
}