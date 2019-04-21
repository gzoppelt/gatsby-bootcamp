module.exports = {
    siteMetadata: {
        title: 'Gatsby Easter Bootcamp',
        author: 'Guenther'
    },

    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}