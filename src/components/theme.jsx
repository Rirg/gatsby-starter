import React from "react"
import { ThemeProvider } from "styled-components"
import { useTheme } from "@material-ui/core/styles"

import useMediaQuery from "@material-ui/core/useMediaQuery"

const Theme = ({ children }) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  let navHeight = 78
  let sectionPadding = "padding-top: 1.5em; padding-bottom: 1.5em;"

  if (isMd) {
    navHeight = 137
    sectionPadding = "padding-top: 7em; padding-bottom: 7em;"
  }

  return (
    <ThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
