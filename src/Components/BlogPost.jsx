import React from 'react'
import Remarkable from 'remarkable'
import Highlight from 'react-highlight'
import * as plugins from './remarkable_plugins'
const md = new Remarkable()


md.use(plugins.table_plugin)

export class BlogPost extends React.Component {
    constructor() {
        super()
        this.state = { content: '<h3>Loading...</h3>'}
    }

    updateContent(content) {
        let htmlContent = md.render(content)
        this.setState({ content: htmlContent })
    }

    componentDidMount() {
        const githubAPI = 'https://api.github.com'
        const myGithub = `${githubAPI}/repos/michaelmosher/michaelmosher.github.io`
        const filename = `${this.props.match.params.blogName}.md`

        fetch(`${myGithub}/contents/blog_posts/${filename}`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            let content = atob(response.content)
            this.updateContent(content)
        })
    }
    render() {
        return <div className='blogPost'>
            <Highlight innerHTML={true}>
                {this.state.content}
            </Highlight>
        </div>
    }
}
