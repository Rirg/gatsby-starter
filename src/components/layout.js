/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo.component"
import Header from "../components/header/header.component"
import Theme from "./theme"
import { AppContainer, GlobalStyles } from "../styles/pages/index.styles"

const Layout = ({ seo, children }) => {

  return (
    <Theme>
      <GlobalStyles/>
      {seo &&
      <SEO data={seo}/>
      }
      <Header />
      <AppContainer>
        <main>{children}</main>
        <footer>
        </footer>
      </AppContainer>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
