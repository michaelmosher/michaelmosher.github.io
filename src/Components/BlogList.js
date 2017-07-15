import React from 'react'
import { Link } from 'react-router-dom'

export class BlogList extends React.Component {
    render() {
        return (
            <ul className='blogList'>
                {this.props.posts.map((p, i) => {
                    return (
                        <li key={i}>
                            <Link to={`/blog/${p}`}>{p}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}