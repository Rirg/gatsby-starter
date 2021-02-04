import styled from "styled-components"
import Img from "gatsby-image"

export const CustomImage = styled(Img)`
  ${({ paddingpercentage }) =>
    paddingpercentage
      ? `
   
    position: relative;
    padding-top: ${paddingpercentage}%; /* 16:9 Aspect Ratio */

  > div {
    padding-bottom: 0 !important;
  }
  
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      //transform: none;
    }
  }
   `
      : ""};
`
