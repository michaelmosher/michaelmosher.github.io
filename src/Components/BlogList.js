import React from 'react'
import { Link } from 'react-router-dom'

export class BlogList extends React.Component {
    constructor() {
        super()
        this.state = { posts: []}
    }

    componentDidMount() {
        const githubAPI = 'https://api.github.com'
        const myGithub = `${githubAPI}/repos/michaelmosher/michaelmosher.github.io`

        fetch(`${myGithub}/contents/blog_posts`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            let blogPosts = response.map(b => b.name.replace('.md', ''))
            this.setState({ posts: blogPosts })
        })
    }

    render() {
        return (
            <ul className='blogList'>
                {this.state.posts.map((p, i) => (
                    <li key={i}>
                        <Link to={`/blog/${p}`}>{p}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}