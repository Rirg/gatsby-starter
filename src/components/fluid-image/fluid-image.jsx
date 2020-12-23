import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const FluidImage = ({
  img,
  alt,
  className,
  withFallback = false,
  ...props
}) => {
  //const altText = img && alt ? alt : img.altText
  let imageFile = ""
  let imgAlt = alt

  if (!imgAlt) {
    imgAlt = img.altText ? img.altText : img.title
  }

  if (img && img.imageFile) {
    imageFile = img.imageFile
  }

  if (img && img.childImageSharp) {
    imageFile = img
  }

  const data = useStaticQuery(graphql`
    query {
      fallbackImage: file(relativePath: { eq: "fallback.svg" }) {
        publicURL
      }
    }
  `)

  /**
   * Return fallback Image, if no Image is given.
   */
  if (!img) {
    return withFallback ? (
      <img
        className={className}
        src={data.fallBackImage.publicURL}
        alt={imgAlt}
        {...props}
      />
    ) : null
  }

  if (img && imageFile) {
    return (
      <Img
        className={className}
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

export default FluidImage
