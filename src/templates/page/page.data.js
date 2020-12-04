const PageTemplateFragment = (layouts) => `
    fragment PageTemplateFragment on WPGraphQL_Page {
        id
        isFrontPage
        title
        databaseId
        content
        uri
        slug
        parentId
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
          opengraphModifiedTime
          opengraphImage {
            altText
            sourceUrl
            title
          }
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
        pageBuilder {
            layouts {
                ${layouts}
            }
            pageConfiguration {
              hideFooter
              hideHeaderItems
          }
        }
    }
`

module.exports.PageTemplateFragment = PageTemplateFragment