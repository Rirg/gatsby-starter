const postTemplate = require.resolve("../src/templates/post/post.template.jsx")

const GET_PAGES = `
    query GET_POSTS {
            allWpPost {
                nodes {                
                    title
                    id
                    date
                    content
                    featuredImage {
                      node {
                        sourceUrl
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 1200) {
                              base64
                              aspectRatio
                              src
                              srcSet
                              sizes
                              srcWebp
                            }
                          }
                        }
                      }
                    }
                    seo {                     
                      canonical
                      title
                      focuskw
                      metaDesc
                      metaKeywords
                      metaRobotsNofollow
                      metaRobotsNoindex
                      opengraphAuthor
                      opengraphDescription
                       opengraphImage {
                        altText
                        sourceUrl
                        title
                      }
                      opengraphModifiedTime
                      opengraphPublishedTime
                      opengraphPublisher
                      opengraphSiteName
                      opengraphTitle
                      opengraphType
                      opengraphUrl
                      twitterDescription
                      twitterTitle
                      twitterImage {
                        altText
                        sourceUrl
                        title
                      }
                    }
                    id
                    uri
                }
            }
    }
`

const allPosts = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create posts in our static site.
   */
  const { createPage } = actions
  /**
   * Fetch posts method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPosts = async variables =>
    /**
     * Fetch posts using the GET_PAGES query and the variables passed in.
     */
    await graphql(GET_PAGES, variables).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpPost: { nodes },
      } = data

      /**
       * Map over the posts for later creation
       */
      nodes &&
        nodes.map(posts => {
          allPosts.push(posts)
        })

      /**
       * Once we're done, return all the posts
       * so we can create the necessary posts with
       * all the data on hand.
       */
      return allPosts
    })

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts.
   */
  await fetchPosts().then(wpPosts => {
    wpPosts &&
      wpPosts.map(post => {
        /**
         * Build post path based of theme blogURI setting.
         */
        const path = `blog${post.uri}`

        createPage({
          path: path,
          component: postTemplate,
          context: {
            data: post,
          },
        })

        reporter.info(`post created:  ${post.uri}`)
      })

    reporter.info(`# -----> POSTS TOTAL: ${wpPosts.length}`)
  })
}
