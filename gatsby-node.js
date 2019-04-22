const path = require('path');

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions;

    // console output right in terminal where yarn develop is run

    // this lists all the nodes with their structures
    //console.log(JSON.stringify(node, undefined, 4));
    
    // only interested in the md file nodes
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        //console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", slug);
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
        // The new node field can now be queried lieke below.
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // get markdown data
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // create pages
    res.data.allMarkdownRemark.edges.forEach( (edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            } 
        });
    });     
};