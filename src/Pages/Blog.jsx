import React from 'react'
import { Route } from 'react-router-dom'

import { BlogList } from '../Components/BlogList.jsx'
import { BlogPost } from '../Components/BlogPost.jsx'

const Blog = ({ match }) => (
    <div>
        <Route exact path='/blog' render={() => (<h1>Archive</h1>)} />
        <Route exact path='/blog' component={BlogList} />
        <Route path={match.url + '/:blogName'} component={BlogPost} />
    </div>
)

export default Blog
