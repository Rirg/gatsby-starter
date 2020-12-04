
// This is a temporary generated file. Changes to this file will be overwritten eventually!
import React from "react"
import Layout from "../src/components/layout"

// Sections
import MiscContent from '../src/layouts/MiscContent/';

const Page = ({ pageContext }) => {
  const {
    page: { seo, pageBuilder, title, parentId },
  } = pageContext

  const layouts = pageBuilder.layouts || []

  return (
    <Layout {...pageBuilder.pageConfiguration} seo={seo}>
      {
        layouts.map((layout, index) => {
          
              if (layout.fieldGroupName === 'page_Pagebuilder_Layouts_MiscContent') {
                  return <MiscContent 
                  {...layout} 
                    pageTitle={title}
                     parentId={parentId}
                    key={layout.fieldGroupName + index}
                  />;
              }
            
        })
      }

    </Layout>
  )
}

export default Page
  