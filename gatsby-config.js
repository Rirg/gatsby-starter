module.exports = {
  plugins: [
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
        theme_color: `#39C33A`,
        display: `minimal-ui`,
        icon: `src/assets/icons/short-logo.svg` // This path is relative to the root of the site.
      }
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // TODO replace this for the actual WP graphql URL
          process.env.WPGRAPHQL_URL ||
          `https://admin-unanet.weareshellshock.com/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
                : // and we don't actually need more than 5000 in production for this particular site
                5000
          }
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`100`, `400`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          }
        ]
      }
    }
  ]
}
