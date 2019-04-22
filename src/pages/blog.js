import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './blog.module.scss';

const BlogPage = () => {
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
            <ol>
                {blogs.map( (blog, index) => {
                    const link = '/blog/' + blog.node.fields.slug;
                    return (
                        <li key={index}>  
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
}

export default BlogPage