module.exports = (imports) => {
  return`
// This is a temporary generated file. Changes to this file will be overwritten eventually!
import React from "react"
import Layout from "../src/components/layout"

// Sections
${imports.map(({ componentName, filePath }) => `import ${componentName} from '${filePath}';`).join('\n')}

const Page = ({ pageContext }) => {
  const {
    page: { seo, pageBuilder, title, parentId },
  } = pageContext

  const layouts = pageBuilder.layouts || []

  return (
    <Layout {...pageBuilder.pageConfiguration} seo={seo}>
      {
        layouts.map((layout, index) => {
          ${imports.map(({ componentName, layoutType }) => {
            return `
              if (layout.fieldGroupName === '${layoutType}') {
                  return <${componentName} 
                  {...layout} 
                    pageTitle={title}
                     parentId={parentId}
                    key={layout.fieldGroupName + index}
                  />;
              }
            `
            }).join('\n')}
        })
      }

    </Layout>
  )
}

export default Page
  `
}