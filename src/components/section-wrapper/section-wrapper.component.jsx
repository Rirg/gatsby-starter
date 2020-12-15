import React from "react"
import * as S from "./section-wrapper.styles.jsx"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"

const SectionWrapper = ({ children, className, bg, contained, maxWidth }) => (
  <S.Wrapper className={`sectionWrapper ${className}`} bg={bg}>
    {contained ? (
      <Container maxWidth={maxWidth}>{children}</Container>
    ) : (
      children
    )}
  </S.Wrapper>
)

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
}

export default SectionWrapper
