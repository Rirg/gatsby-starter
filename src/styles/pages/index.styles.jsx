import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    font-family:${({ theme }) => theme.fonts.primaryFont};
    // Remove default behaviour from MUI when opening menu
    //overflow: unset !important;
    //padding: 0 !important;
  }
  
  img, svg {
    max-width: 100%;
  }
  
  .emphasis {
     color: ${({ theme }) => theme.palette.primary.main};
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
     
     ${({ theme }) => theme.breakpoints.up("md")} {
         font-size: 2.5rem;
     }
  }
  
  h1, h2, h3, h4 {
       font-family:${({ theme }) => theme.fonts.secondaryFont};
       margin: 0;
  }
  
  .tl-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  } 
     // WORDPRESS CLASSES
     /* =WordPress Core
     -------------------------------------------------------------- */
     .alignnone {
       margin: 5px 20px 20px 0;
     }
     
     .aligncenter,
     div.aligncenter {
       display: block;
       margin: 5px auto 5px auto;
     }
     
     .alignright {
       float: right;
       margin: 5px 0 20px 20px;
     }
     
     .alignleft {
       float: left;
       margin: 5px 20px 20px 0;
     }
     
     a img.alignright {
       float: right;
       margin: 5px 0 20px 20px;
     }
     
     a img.alignnone {
       margin: 5px 20px 20px 0;
     }
     
     a img.alignleft {
       float: left;
       margin: 5px 20px 20px 0;
     }
     
     a img.aligncenter {
       display: block;
       margin-left: auto;
       margin-right: auto;
     }
     
     .wp-caption {
       background: #fff;
       border: 1px solid #f0f0f0;
       max-width: 96%; /* Image does not overflow the content area */
       padding: 5px 3px 10px;
       text-align: center;
     }
     
     .wp-caption.alignnone {
       margin: 5px 20px 20px 0;
     }
     
     .wp-caption.alignleft {
       margin: 5px 20px 20px 0;
     }
     
     .wp-caption.alignright {
       margin: 5px 0 20px 20px;
     }
     
     .wp-caption img {
       border: 0 none;
       height: auto;
       margin: 0;
       max-width: 98.5%;
       padding: 0;
       width: auto;
     }
     
     .wp-caption p.wp-caption-text {
       font-size: 11px;
       line-height: 17px;
       margin: 0;
       padding: 0 4px 5px;
     }
     
     /* Text meant only for screen readers. */
     .screen-reader-text {
       border: 0;
       clip: rect(1px, 1px, 1px, 1px);
       clip-path: inset(50%);
       height: 1px;
       margin: -1px;
       overflow: hidden;
       padding: 0;
       position: absolute !important;
       width: 1px;
       word-wrap: normal !important; /* Many screen reader and browser combinations announce broken words as they would appear visually. */
     }
     
     .screen-reader-text:focus {
       background-color: #eee;
       clip: auto !important;
       clip-path: none;
       color: #444;
       display: block;
       font-size: 1em;
       height: auto;
       left: 5px;
       line-height: normal;
       padding: 15px 23px 14px;
       text-decoration: none;
       top: 5px;
       width: auto;
       z-index: 100000;
       /* Above WP toolbar. */
     }


`

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.navHeight}px;
  background-color: #f8fdff;
`
