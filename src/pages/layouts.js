import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"

const Layouts = () => {
  return (
    <Layout seo={{ title: "Layouts - ONLY FOR DEV" }}>
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />
    </Layout>
  )
}

export default Layouts
