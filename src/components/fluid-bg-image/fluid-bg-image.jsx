import React from "react"
import BackgroundImage from "gatsby-background-image"

const FluidBgImg = ({ img, tag = "section", className, fallback, children }) => {
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
    return <section>{children}</section>
  }

  if (imageFile) {
    return (
      <BackgroundImage
        Tag={tag}
        className={className}
        fluid={imageFile.fluid}
      >
        {children}
      </BackgroundImage>
    )
  }

  return (
    <section
      style={{
        backgroundImage: `url(${img.sourceUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "center",
        backgroundPosition: "center"
      }}
      className={className}
    >
      {children}
    </section>
  )
}
export default FluidBgImg