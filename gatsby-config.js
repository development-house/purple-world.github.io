module.exports = {
  siteMetadata: {
    title: 'Purple World',
    description: 'A FiveM community roleplay server',
    siteUrl: 'https://purpleworld.net',
    author: 'bartosjiri <hi@bartosjiri.com>',
    assets: '/meta',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('node-sass'),
      },
    },
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
}
