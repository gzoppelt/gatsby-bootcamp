module.exports = {
    siteMetadata: {
        title: 'Gatsby Easter Bootcamp',
        author: 'Guenther'
    },

    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options:    {
                spaceId: 'kpayddttbvny',
                accessToken: '403b47729e7dbfe87a34c4528d37677fb716e9b8fa20824e86e8448fef4433d1'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }

                ]
            }
        }
        
    ]
}