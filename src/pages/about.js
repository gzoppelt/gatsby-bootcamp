import React from 'react'   
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>Gatsby</h1>
            <p>Gatsby is a combination of NodeJS, React, and GraphQL.</p>
            <p>I am just about to learn it from this course:<br/>
            <a href="https://mead.io/gatsby-bootcamp">click</a>
            </p>
            <hr/>
            <Link to="/">Home</Link>
        </div> 
    )
}

export default AboutPage
