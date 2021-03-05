import React from "react"
import PropTypes from "prop-types"
import * as S from "./fluid-image.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const CustomImage = ({
  img,
  alt,
  className,
  placeholderStyle,
  arPaddingPercentage,
  withFallback = false,
  ...props
}) => {
  if (!img) return null

  let image = ""
  let imgAlt = alt

  if (!imgAlt) {
    imgAlt = img.altText ? img.altText : img.title
  }

  if (img.localFile) {
    image = img.localFile.childImageSharp.gatsbyImageData
  }

  if (img.childImageSharp) {
    image = img.childImageSharp.gatsbyImageData
  }

  if (image) {
    return (
      <S.Wrapper paddingpercentage={arPaddingPercentage} className={className}>
        <GatsbyImage
          placeholderStyle={placeholderStyle}
          image={image}
          alt={imgAlt}
          {...props}
        />
      </S.Wrapper>
    )
  }

  return (
    <img
      className={className}
      src={img.sourceUrl ? img.sourceUrl : img}
      {...props}
    />
  )
}

CustomImage.propTypes = {
  img: PropTypes.object.isRequired,
  arPaddingPercentage: PropTypes.number,
}

export default FluidImage
