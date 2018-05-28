module.exports = {
  siteMetadata: {
    title: 'Dominic Lee - Learning Journal',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [],
        precision: 8,
      },
    },
  ],
};
