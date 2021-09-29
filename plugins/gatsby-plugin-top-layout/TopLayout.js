import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import theme from "../../src/theme"

import { GlobalStyles } from "../../src/styles/app.styles"
import { CssBaseline, Paper, useMediaQuery } from "@mui/material"

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
      <Helmet
        htmlAttributes={{
          lang: "en-US",
        }}
      >
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
      </Helmet>
      <MuiThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
        {/*<ThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>*/}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles />
        <Paper elevation={0}>{props.children}</Paper>
        {/*</ThemeProvider>*/}
      </MuiThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
