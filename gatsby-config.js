/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata:{
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author: '@johndoe',
    data:['tem1', 'item2'],
    person: {name:'peter', age: 32},
  }
  ,
  plugins: [`gatsby-plugin-styled-components`,
   `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {            
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w56duppfaszu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
  /* Your site config here */
  
}
