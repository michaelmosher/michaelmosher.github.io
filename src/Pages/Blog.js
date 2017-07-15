import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { BlogList } from '../Components/BlogList'
import { BlogPost } from '../Components/BlogPost'

export class Blog extends React.Component {
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
            <Router>
                <div>
                    <h1>I wrote a blog!</h1>
                    <Route exact path='/blog' render={(props) => (
                        <BlogList {...props} posts={this.state.posts} />
                    )} />
                    <Route path='/blog/:blogName' component={BlogPost} />
                </div>
            </Router>
        )
    }
}