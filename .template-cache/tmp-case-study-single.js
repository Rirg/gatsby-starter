
// This is a temporary generated file. Changes to this file will be overwritten eventually!
import React from "react"
import Layout from "../src/components/layout"

// Sections


const Page = ({ pageContext }) => {
  const {
    page: { seo, pageBuilder, title, parentId },
  } = pageContext

  const layouts = pageBuilder.layouts || []

  return (
    <Layout {...pageBuilder.pageConfiguration} seo={seo}>
      {
        layouts.map((layout, index) => {
          
        })
      }

    </Layout>
  )
}

export default Page
  