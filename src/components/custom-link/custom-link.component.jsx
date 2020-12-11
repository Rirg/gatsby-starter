import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-link.styles"

const CustomLink = ({ url, children, target, className }) => (
  // <AniLink
  //   className={className}
  //   fade to={url}
  //   style={{textDecoration: 'none', color: '#10365A'}}>
  //   {children}
  // </AniLink>
  <S.CustomLink target={target} className={className} to={url}>
    {children}
  </S.CustomLink>
)

CustomLink.propTypes = {
  url: PropTypes.string.isRequired,
}

export default CustomLink
