let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.domain.com`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        // this option places the tracking script into the head of the DOM
        head: true
        // other options
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.name.com",
        sitemap: "https://www.name.com/sitemap.xml",
        env: {
          development: {
            policy: [{
              userAgent: "*",
              disallow: ["/"]
            }]
          },
          production: {
            policy: [{
              userAgent: "*",
              allow: "/",
              // disallow: ["/support/cloud-agreement/", "support/cloud-agreement-may-2020", "/thank-you"]
            }]
          }
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#39C33A`
        // icon: `src/assets/icons/short-logo.svg` // This path is relative to the root of the site.
      }
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `${process.env.WORDPRESS_URL}/graphql`
      }
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`,
          `Montserrat\:100,400,700`
        ],
        display: 'swap'
      }
    }
  ]
}