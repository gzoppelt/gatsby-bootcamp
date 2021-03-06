import React from 'react'   
import Layout from '../components/layout'
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Gatsby</h1>
            <p>Gatsby is a combination of NodeJS, React, and GraphQL.</p>
            <p>I am just about to learn it from this course:&nbsp;&nbsp;
                <a href="https://mead.io/gatsby-bootcamp"
                   target="_blank"
                   rel="noopener noreferrer"
                   >
                
                    Gatsby Bootcamp
                </a>
            </p>
        </Layout> 
    )
}

export default AboutPage
