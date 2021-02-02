import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Raleway, sans-serif",
    secondary: "Raleway, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#2E6EFE",
      light: "#1A2933",
      dark: "#091118",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#1F1D2F",
      light: "#1F1D2F",
      dark: "#1F1D2F",
    },
    tertiary: {
      main: "#2C9ED0",
    },
    text: {
      primary: "#1B1B1F",
      secondary: "#0F1923",
      content: "#797979",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#EEEEEE",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Raleway", "Open Sans", "Arial", sans-serif`,
  },
})
export default theme
