import React from 'react';
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation'>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            </div>
        )
    }
}
