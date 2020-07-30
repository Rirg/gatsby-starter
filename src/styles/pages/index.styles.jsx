import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family:${({theme}) => theme.fonts.primaryFont.fontFamily};
  }
  
  #___gatsby {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

export const AppContainer = styled.main`
   position: relative;
   display: flex;
   flex: 1;
   flex-direction: column;
   padding-top: ${({theme}) => theme.navHeight};
`