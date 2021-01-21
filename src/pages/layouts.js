import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"

const Layouts = () => {
  return (
    <Layout seo={{ title: "Layouts - ONLY FOR DEV" }}>
      <MiscContent content={`<p>Some content Here</p>`} />
    </Layout>
  )
}

export default Layouts
