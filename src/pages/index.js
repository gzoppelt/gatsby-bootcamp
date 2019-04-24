import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <h1>Hello!</h1>
            <h2>I am Guenther, living in beautiful Hemel Hempstead.</h2>
        </Layout>
    );
};

export default IndexPage;