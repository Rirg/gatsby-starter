import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { CssBaseline, Paper } from "@material-ui/core"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import theme from "../../src/theme"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../src/styles/app.styles"

export default function TopLayout(props) {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  let navHeight = theme.navHeight
  let sectionPadding = theme.sectionPadding

  if (isMd) {
    navHeight = 68
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  }

  return (
    <React.Fragment>
      <Helmet>
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
      </Helmet>
      <MuiThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
        <ThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles />
          <Paper elevation={0}>{props.children}</Paper>
        </ThemeProvider>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
