import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header >
        <Link to='/' className='logo'>Michael Mosher</Link>
        <Link to='/blog'>Blog</Link>
    </header>
)
export default Header