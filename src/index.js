import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main } from './Pages/Main'
import { Blog } from './Pages/Blog'
import { Navigation } from './Components/Navigation'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Main} />
            <Route path='/blog' component={Blog} />
            <Navigation />
        </div>
    </Router>,
    document.getElementById('react-main')
)
