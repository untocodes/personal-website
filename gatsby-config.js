const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: `https://untok.fi`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data/blog/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlights`,
            options: {
                scopePrefix: 'syntax--',
              }
          },
        ],
      },
      
    },*/
  ]
}
