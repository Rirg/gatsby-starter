/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SeoComponent from "../seo/seo.component"
import Theme from "../theme"
import { AppContainer, GlobalStyles } from "../../styles/pages/index.styles"
import Header from "../header/header.component"
import Footer from "../footer/footer.component"

const LayoutComponent = ({ seo, children }) => {
  return (
    <Theme>
      <GlobalStyles />
      <SeoComponent data={seo} />
      <Header />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </Theme>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
