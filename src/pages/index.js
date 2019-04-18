import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return(
        <div>
            <h1>Hello!</h1>
            <h2>I am Guenther, living in beautiful Hemel.</h2>
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default IndexPage