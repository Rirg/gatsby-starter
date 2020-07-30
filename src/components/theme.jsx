import React from "react";
import {ThemeProvider} from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';

import useMediaQuery from "@material-ui/core/useMediaQuery";


const Theme = ({children}) => {

  const defaultTheme = createMuiTheme();

  const matchesMd = useMediaQuery(defaultTheme.breakpoints.up('md'));
  const matchesLg = useMediaQuery(defaultTheme.breakpoints.up('lg'));
  const spacing = matchesLg ? 16 : 8;


  let navHeight = null;
  if (matchesMd) {
    navHeight = '60px';
  }
  if (matchesLg) {
    navHeight = '80px';
  }

  const theme = createMuiTheme({
    spacing,
    navHeight,
    fonts: {
      primaryFont: 'Roboto sans-serif'
    },
    palette: {
      primary:
        {main: '#000000'}
    }
  })

  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </CssBaseline>
  )
};


export default Theme;