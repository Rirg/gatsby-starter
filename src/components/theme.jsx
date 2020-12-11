import React from "react"
import { ThemeProvider } from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles"

import useMediaQuery from "@material-ui/core/useMediaQuery"

const Theme = ({ children }) => {
  const defaultTheme = createMuiTheme()
  const matchesSm = useMediaQuery(defaultTheme.breakpoints.up("sm"))
  const matchesMd = useMediaQuery(defaultTheme.breakpoints.up("md"))
  const matchesLg = useMediaQuery(defaultTheme.breakpoints.up("lg"))
  const spacing = matchesLg ? 16 : matchesMd ? 8 : matchesSm ? 8 : 0

  // Nav height in pixels
  let navHeight = 59
  let sectionPadding = "padding-top: 1.5em; padding-bottom: 1.5em;"

  if (matchesMd) {
    navHeight = 77
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  }
  if (matchesLg) {
    navHeight = 77
  }

  const theme = createMuiTheme({
    spacing,
    navHeight,
    sectionPadding,
    fonts: {
      primaryFont: "Montserrat, sans-serif",
      secondaryFont: "Open Sans, sans-serif",
    },
    palette: {
      primary: {
        // contrastText: "rgba(0, 0, 0, 0.87)",
        main: "#39C33A",
        light: "#39C33A",
        dark: "#39C33A",
      },
      secondary: {
        // contrastText: "rgba(0, 0, 0, 0.87)",
        main: "#10365A",
        light: "#10365A",
        dark: "#10365A",
      },
      tertiary: {
        main: "#52D6FF",
      },
      text: {
        primary: "#10355A",
        secondary: "#10355A",
        disabled: "#10355A",
        hint: "#10355A",
      },
    },
    typography: {
      fontFamily: `"Roboto", "Open Sans", "Arial", sans-serif`,
    },
  })

  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </CssBaseline>
  )
}

export default Theme
