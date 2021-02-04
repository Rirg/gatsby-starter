import React from "react"
import PropTypes from "prop-types"
import * as S from "./fluid-image.styles"

const FluidImage = ({
  img,
  alt,
  className,
  placeholderStyle,
  arPaddingPercentage,
  withFallback = false,
  ...props
}) => {
  if (!img) return null

  //const altText = img && alt ? alt : img.altText
  let imageFile = ""
  let imgAlt = alt

  if (!imgAlt) {
    imgAlt = img.altText ? img.altText : img.title
  }

  if (img.imageFile) {
    imageFile = img.imageFile
  }

  if (img.childImageSharp) {
    imageFile = img
  }

  if (imageFile) {
    return (
      <S.CustomImage
        paddingpercentage={arPaddingPercentage}
        className={className}
        placeholderStyle={placeholderStyle}
        fluid={imageFile.childImageSharp.fluid}
        alt={imgAlt}
        {...props}
      />
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

FluidImage.propTypes = {
  img: PropTypes.object.isRequired,
  arPaddingPercentage: PropTypes.number,
}

export default FluidImage
