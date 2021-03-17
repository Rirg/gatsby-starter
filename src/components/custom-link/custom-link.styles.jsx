import styled, { css } from "styled-components"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const styledLink = css`
  text-decoration: none;
  cursor: pointer;
`

export const CustomLink = styled(Link)`
  ${styledLink};
`

export const CustomRegularLink = styled(Link)`
  ${styledLink};
`

export const CustomAniLink = styled(AniLink)`
  ${styledLink};
`
