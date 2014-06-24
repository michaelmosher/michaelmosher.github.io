function resizePopup() {
	res1 = document.getElementById('resume');
	res2 = document.getElementById('googleResume');
	res1.width = res2.width = 0.8 * window.innerWidth;
	res1.height = res2.height = 0.9 * window.innerHeight;
}

function openOverlay() {
	resizePopup();
	document.getElementById('overlay').style.visibility = 'visible';
}

function closeOverlay() {
	document.getElementById('overlay').style.visibility = 'hidden';
}