import React, { useState } from "react"
import Skeleton from "@material-ui/lab/Skeleton"

import * as S from "./ar-image.styles"
import PropTypes from "prop-types"

const ARImage = ({
  paddingPercentage,
  src,
  alt,
  onClick,
  children,
  overlay,
}) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <S.Container onClick={onClick} paddingPercentage={paddingPercentage}>
      {overlay && <S.Overlay />}
      <img
        style={isLoading ? { display: "none" } : null}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
      {isLoading && <Skeleton variant="rect" />}
      {children}
    </S.Container>
  )
}

ARImage.propTypes = {
  paddingPercentage: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

export default ARImage
