import React from "react"
import Layout from "../../components/layout"

const Page = ({pageContext: {data}}) => {
  const {seo, title} = data
  return (
    <Layout seo={seo}>
      <h1>{title}</h1>
    </Layout>
  )
}

export default Page;