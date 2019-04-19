import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return(
        <header>
            <h1>Gatsby Bootcamp</h1>
            <h3>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/blog">Blog</Link>&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>&nbsp;&nbsp;
                <Link to="/about">About</Link>&nbsp;&nbsp;
            </h3>
            <hr />
        </header>
    )
}

export default Header