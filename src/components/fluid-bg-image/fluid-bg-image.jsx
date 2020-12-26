import React from "react"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const FluidBgImg = ({
  img,
  tag = "section",
  className,
  fallback,
  children,
}) => {
  if (!img && !fallback) return <section>{children}</section>

  let imageFile = ""
  if (img.imageFile) {
    imageFile = img.imageFile.childImageSharp
  }

  if (img.childImageSharp) {
    imageFile = img.childImageSharp
  }

  if (!img && fallback) {
    imageFile = fallback.childImageSharp
  }

  if (imageFile) {
    return (
      <BackgroundImage Tag={tag} className={className} fluid={imageFile.fluid}>
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
        backgroundPosition: "center",
      }}
      className={className}
    >
      {children}
    </section>
  )
}

FluidBgImg.propTypes = {
  img: PropTypes.object.isRequired,
}

export default FluidBgImg
