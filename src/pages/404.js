import React from "react"

import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

const NotFoundPage = () => (
  <Layout seo={{ title: "404: Not Found" }}>
    <Container
      style={{ textAlign: "center", paddingTop: "10em", paddingBottom: "10em" }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
