import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

import * as S from "../styles/pages/index.styles"

// export const query = graphql`query {
//     wpgraphql {
//         pages(
//             where: {
//                 title: "Home"
//             }
//         ) {
//             nodes {
//                 title
//                 content
//                 isFrontPage
//                 seo {
//                     cornerstone
//                     canonical
//                     title
//                     focuskw
//                     metaDesc
//                     metaKeywords
//                     metaRobotsNofollow
//                     metaRobotsNoindex
//                     opengraphAuthor
//                     opengraphDescription
//                     opengraphModifiedTime
//                     opengraphPublishedTime
//                     opengraphPublisher
//                     opengraphSiteName
//                     opengraphTitle
//                     opengraphType
//                     opengraphUrl
//                     twitterDescription
//                     twitterTitle
//                 }
//                 id
//                 uri
//             }
//         }
//     }
// }
// `

const Index = ({ data }) => {
  //  TODO make sure you have a front-page set in WordPress or this will crash!
  // const pageData = data.wpgraphql.pages.nodes[0]
  // const { seo, title, content } = pageData
  return (
    <Layout seo={{ title: "Page Title" }}>
      <Container>
        <h1>Title here</h1>
      </Container>
    </Layout>
  )
}

export default Index
