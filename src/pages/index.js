import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

import * as S from "../styles/pages/index.styles"

export const query = graphql`
    {
        allWpPage(filter: {isFrontPage: {eq: true}}) {
            edges {
                node {
                    title
                    content
                    seo {
                        canonical
                        focuskw
                        metaDesc
                        metaKeywords
                        metaRobotsNofollow
                        metaRobotsNoindex
                        opengraphAuthor
                        opengraphDescription
                        opengraphModifiedTime
                        opengraphPublishedTime
                        opengraphPublisher
                        opengraphSiteName
                        opengraphTitle
                        opengraphType
                        opengraphUrl
                        title
                        twitterDescription
                        twitterTitle
                    }
                }
            }
        }
    }
`

const Index = ({ data }) => {
  //  TODO make sure you have a front-page set in WordPress or this will crash!
  // const pageData = data.allWpPage.edges[0].node
  // const { title, content } = pageData
  return (
    // <Layout seo={pageData.seo}>
    <Layout seo={null}>
      <Container>
        <h1>Title here</h1>
      </Container>
    </Layout>
  )
}

export default Index
