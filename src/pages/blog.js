import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        #publishedDate(formatString: "D. M. YYYY")
                        publishedDate(fromNow: true)
                    }
                }
            }
        }
    `) 
 
    const blogs = data.allContentfulBlogPost.edges;
    
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blogs</h1>
            <ol className={blogStyles.posts}>
                {blogs.map( (blog, index) => {
                    const link = '/blog/' + blog.node.slug;
                    return (
                        <li key={index} className={blogStyles.post}>  
                            <Link to={link}>
                                <h2>{blog.node.title}</h2>
                                <p>{blog.node.publishedDate}</p>
                            </Link>
                        </li>   
                    )    
                })}
            </ol>
        </Layout>
    )
    
 

    // saved from getting the data from md files
    /*
     const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `) 
 
    const blogs = data.allMarkdownRemark.edges
    
    return (
        <Layout>
            <h1>Blogs</h1>
            <ol className={blogStyles.posts}>
                {blogs.map( (blog, index) => {
                    const link = '/blog/' + blog.node.fields.slug;
                    return (
                        <li key={index} className={blogStyles.post}>  
                            <Link to={link}>
                                <h2>{blog.node.frontmatter.title}</h2>
                                <p>{blog.node.frontmatter.date}</p>
                            </Link>
                        </li>   
                    )    
                })}
            </ol>
        </Layout>
    )
    */
}

export default BlogPage