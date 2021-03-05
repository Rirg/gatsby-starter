import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-image.styles"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const CustomImage = ({
  img,
  alt,
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

  if (img.localFile) {
    imageFile = img.localFile
  }

  if (img.childImageSharp) {
    imageFile = img
  }

  if (img.file) {
    imageFile = img.file
  }

  if (imageFile) {
    return (
      <S.Wrapper paddingpercentage={arPaddingPercentage} {...props}>
        <GatsbyImage
          placeholderStyle={placeholderStyle}
          image={imageFile.childImageSharp.gatsbyImageData}
          alt={imgAlt}
        />
      </S.Wrapper>
    )
  }

  return <StaticImage src={img.sourceUrl ? img.sourceUrl : img} {...props} />
}

CustomImage.propTypes = {
  img: PropTypes.object.isRequired,
  arPaddingPercentage: PropTypes.number,
}

export default CustomImage
