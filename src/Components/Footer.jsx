import React from 'react'
import { Link } from 'react-router-dom'

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