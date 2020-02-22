module.exports = {
  siteMetadata: {
    title: 'Purple World',
    description: 'A Grand Theft Auto V community roleplay server.',
    author: 'bartosjiri <hi@bartosjiri.com>',
    assets: '/meta'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'work sans:400,700'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'purple-world',
        short_name: 'purple-world',
        start_url: '/',
        display: 'standalone',
        icon: 'static/meta/favicon.png'
      },
    }
  ]
}
