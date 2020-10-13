import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

const TransitionLink = ({ url, children, className }) => (
  // <AniLink
  //   className={className}
  //   fade to={url}
  //   style={{textDecoration: 'none', color: '#10365A'}}>
  //   {children}
  // </AniLink>
  <Link
    className={className}
    style={{ textDecoration: "none", color: "#10365A" }}
    to={url}>
    {children}
  </Link>
)

TransitionLink.propTypes = {
  url: PropTypes.string.isRequired
}

export default TransitionLink