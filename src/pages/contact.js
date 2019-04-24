import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (   
        <Layout>
            <Head title="Contact" />
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
    );
};

export default ContactPage;
