import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

// the $slug query variable comes from the context in 
// createPage in /gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields : { slug: {eq: $slug} }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

// a bit of a mystery how the exported query becomes props, but here we go:
const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={ { __html: props.data.markdownRemark.html} } />
        </Layout>
    );
};

export default Blog;