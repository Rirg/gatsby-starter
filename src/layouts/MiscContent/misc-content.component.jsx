import React from "react"
import * as S from "./misc-content.styles.jsx"

const MiscContent = ({ containerMaxWidth, content }) => {
  const parse = require("html-react-parser")
  if (!content) return null
  return (
    <S.Wrapper maxWidth={containerMaxWidth ? containerMaxWidth : false}>
      {parse(content)}
    </S.Wrapper>
  )
}
export default MiscContent
