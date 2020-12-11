import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding-top: ${({ paddingPercentage }) =>
    paddingPercentage}%; /* 16:9 Aspect Ratio */

  img,
  .MuiSkeleton-root {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    object-fit: cover;
    //transform: none;
  }

  .MuiSkeleton-root {
    z-index: 1;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
  opacity: 0.4;
`
