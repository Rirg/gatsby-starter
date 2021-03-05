import React from "react"
import PropTypes from "prop-types"
import * as S from "./gatsby-bg-image.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const GatsbyBgImage = props => {
  const { img, tag, fallback, children, ...otherProps } = props

  let image = ""

  if (img.localFile) {
    image = img.localFile.childImageSharp.gatsbyImageData
  }

  if (img.childImageSharp) {
    image = img.childImageSharp.gatsbyImageData
  }

  if (!img && fallback) {
    if (fallback.localFile) {
      image = img.localFile.childImageSharp.gatsbyImageData
    }
    if (fallback.childImageSharp) {
      image = fallback.childImageSharp.gatsbyImageData
    }
  }

  return (
    <S.Wrapper component={tag ? tag : "section"} {...otherProps}>
      {image && <GatsbyImage image={image} role="presentation" />}
      {children}
    </S.Wrapper>
  )
}

GatsbyBgImage.propTypes = {
  img: PropTypes.object.isRequired,
  tag: PropTypes.string,
}

export default GatsbyBgImage