import React from 'react'
import { Route } from 'react-router-dom'

import { BlogList } from '../Components/BlogList'
import { BlogPost } from '../Components/BlogPost'

const Blog = ({ match }) => (
    <div>
        <h1>I wrote a blog!</h1>
        <BlogList />
        <Route path={match.url + '/:blogName'} component={BlogPost} />
    </div>
)

export default Blog
