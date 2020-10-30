import React from "react"
import BackgroundImage from "gatsby-background-image"

const SectionImg = ({ img, className, fallback, children }) => {
  let imageFile = ""
  if (img && img.imageFile) {
    imageFile = img.imageFile.childImageSharp
  }

  if (img && img.childImageSharp) {
    imageFile = img.childImageSharp
  }

  if (!img && fallback) {
    imageFile = fallback.childImageSharp
  }

  if (!imageFile && !img) {
    return null
  }

  if (imageFile) {
    return (
      <BackgroundImage
        Tag='section'
        className={className}
        fluid={imageFile.fluid}
      >
        {children}
      </BackgroundImage>
    )
  }

  return (
    <section
      style={{ background: `url(${img.sourceUrl}) no-repeat center center`, backgroundSize: "cover" }}
      className={className}
    >
      {children}
    </section>
  )
}
export default SectionImg