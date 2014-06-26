function resizePopup() {
	res1 = document.getElementById('resume');
	res1.width = 0.8 * window.innerWidth;
	res1.height = 0.9 * window.innerHeight;
}

function openOverlay() {
	resizePopup();
	document.getElementById('overlay').style.visibility = 'visible';
	document.body.className = 'noscroll';
}

function closeOverlay() {
	document.getElementById('overlay').style.visibility = 'hidden';
	document.body.className = '';
}