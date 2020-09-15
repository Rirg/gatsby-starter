import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import TransitionLink from "../transition-link/transition-link.component"

export const Wrapper = styled.footer`
  color: white;
  padding: 4em 0 0;
  background-color: ${({ theme }) => theme.palette.secondary.main};
    
  ${({ theme }) => theme.breakpoints.down("sm")} {
    
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`