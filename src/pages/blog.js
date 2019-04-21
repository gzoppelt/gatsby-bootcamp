import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

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
                    return (
                        <li key={index}>  
                            <h2>{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.date}</p>
                        </li>   
                    )    
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage