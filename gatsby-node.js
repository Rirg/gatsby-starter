// Create media files for gatsby-image
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

// Create all pages
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")


exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  const { createRedirect } = actions

  const redirects = [
    { fromPath: "/ind-boat-configurator", toPath: "/boat-builder/37-open", redirectInBrowser: true, isPermanent: true },
  ]

  redirects.map(redirect => {
    createRedirect(redirect)
  })

  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
}