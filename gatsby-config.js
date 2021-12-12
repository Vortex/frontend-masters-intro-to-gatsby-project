module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Frontend Masters Intro to Gatsby',
        description: 'Frontend Masters Intro to Gatsby course',
        image: 'https://kanbanzone.com/wp-content/uploads/2021/04/kanban-zone-ikigai-japanese-concept.png'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/layout.js')
                }
            }
        }
    ]
}