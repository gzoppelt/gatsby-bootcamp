import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../components/layout'

const ContactPage = () => {
    return (   
        <Layout>
            <h1>Contact</h1>
            <p>Guenther</p>
            <p>Hemel Hempsyead</p>
            <a href="https://github.com/gzoppelt/gatsby-bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                >
                Find this project on GitHub
            </a>
        </Layout>
    )
}

export default ContactPage
