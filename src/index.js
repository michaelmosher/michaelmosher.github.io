import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import About from './Pages/About'
import Blog from './Pages/Blog'

import Header from './Components/Header'
import Footer from './Components/Footer'

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <article>
                <Route exact path='/' component={About} />
                <Route path='/about'  component={About} />
                <Route path='/blog'   component={Blog} />
            </article>
            <Footer />
        </div>
    </Router>,
    document.getElementById('react-main')
)
