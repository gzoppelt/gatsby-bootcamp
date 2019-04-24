import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

// template for generating pages out of contenful cms

//the $slug query variable comes from the context in 
//createPage in /gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            #publishedDate(fromNow: true)
            publishedDate(formatString: "D. M. YYYY")
            body {
                json
            }
          }
    }
`;

// a bit of a mystery how the exported query becomes props, but here we go:
const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block" : (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return (<img alt={alt} src={url} />);
            }
        }
    };

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    );
};

export default Blog;

// template for generating pages out of md files
/*
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
*/