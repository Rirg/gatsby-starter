import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  navHeight: 79,
  sectionPadding: "padding-top: 7em; padding-bottom: 7em;",
  fonts: {
    primaryFont: "Roboto, sans-serif",
    secondaryFont: "Open Sans, sans-serif",
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#0F1923",
      light: "#1A2933",
      dark: "#091118",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#F54343",
      light: "#10365A",
      dark: "#10365A",
    },
    tertiary: {
      main: "#2C9ED0",
    },
    text: {
      primary: "#10355A",
      secondary: "#0F1923",
      content: "rgba(26, 41, 51, 0.6)",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
    },
  },
  typography: {
    fontFamily: `"DM Sans", "Open Sans", "Arial", sans-serif`,
  },
})
export default theme
