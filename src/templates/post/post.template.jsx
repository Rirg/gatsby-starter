import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"

const Post = ({pageContext: {data}}) => {
  const {seo, title, content, featuredImage} = data
  return (
    <Layout seo={seo}>
      {title}
      <div dangerouslySetInnerHTML={{__html: content}} />
      {/*<Img fluid={featuredImage.imageFile.childImageSharp.fluid} />*/}
    </Layout>
  )
}

export default Post;