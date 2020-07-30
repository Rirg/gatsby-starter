import React from "react"
import Layout from "../components/layout"

const PostComponent = ({pageContext}) => {

  return (
    <Layout seo={pageContext.seo}>
      {pageContext.title}
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
  )
}

export default PostComponent;