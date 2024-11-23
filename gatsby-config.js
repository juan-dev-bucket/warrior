/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'notes',
      path: `${__dirname}/src/notes/`,
    },
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'projects',
      path: `${__dirname}/src/projects/`,
    },
  }
],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'Kick off your next, great Gatsby project with this default starter',
    copyright: '© 2024 Lotan Inc',
    contact: 'https://lotan.com'
  }
}
