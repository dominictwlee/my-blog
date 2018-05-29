module.exports = {
  siteMetadata: {
    title: 'Dominic Lee - Learning Journal',
    author: 'Dominic Lee',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
        precision: 8,
      },
    },
    'gatsby-plugin-react-next',
  ],
};
