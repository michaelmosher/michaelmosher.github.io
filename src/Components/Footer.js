import React from 'react'
import { Link } from 'react-router-dom'

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

const Footer = () => (
    <footer>
        <p>Still want to know more? Check out <a id='overlayLink' href='#' onClick={openOverlay} >my resum&#233;</a>.</p>
		<p>Want to talk? Email me at <a href='mailto:mmosher47@gmail.com' target='_top'>mmosher47@gmail.com</a>.</p>
    </footer>
)
export default Footer