const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            path
            title
            content
                    yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_canonical
          yoast_wpseo_facebook_image
          yoast_wpseo_company_logo
          yoast_wpseo_company_name
          yoast_wpseo_company_or_person
          yoast_wpseo_facebook_description
          yoast_wpseo_facebook_title
          yoast_wpseo_facebook_type
          yoast_wpseo_metadesc
          yoast_wpseo_person_name
          yoast_wpseo_social_url
          yoast_wpseo_twitter_description
          yoast_wpseo_twitter_image
          yoast_wpseo_twitter_title
          yoast_wpseo_website_name
        }
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            path
            title
            content
                    yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_canonical
          yoast_wpseo_facebook_image
          yoast_wpseo_company_logo
          yoast_wpseo_company_name
          yoast_wpseo_company_or_person
          yoast_wpseo_facebook_description
          yoast_wpseo_facebook_title
          yoast_wpseo_facebook_type
          yoast_wpseo_metadesc
          yoast_wpseo_person_name
          yoast_wpseo_social_url
          yoast_wpseo_twitter_description
          yoast_wpseo_twitter_image
          yoast_wpseo_twitter_title
          yoast_wpseo_website_name
        }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.component.jsx`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.component.jsx`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}