import React from "react"
import Layout from "../components/layout"

const PageComponent = ({pageContext}) => {

  return (
    <Layout seo={pageContext.seo}>
      <h1>{pageContext.title}</h1>
    </Layout>
  )
}

export default PageComponent;