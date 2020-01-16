import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const propTypes = {
  spacingTop: PropTypes.string,
  spacingTopTablet: PropTypes.string,
  maxWidth: PropTypes.string,
  customSection: PropTypes.element,
  children: PropTypes.node,
}

const defaultProps = {
  spacingTop: '',
  spacingTopTablet: '',
  maxWidth: '',
  customSection: '',
  children: '',
}

const Section = ({
  spacingTop,
  spacingTopTablet,
  maxWidth,
  customSection,
  children,
}) => (
  <S.SectionWrapper spacingTop={spacingTop} spacingTopTablet={spacingTopTablet}>
    {customSection ? (
      customSection(children)
    ) : (
      <S.Section maxWidth={maxWidth}>{children}</S.Section>
    )}
  </S.SectionWrapper>
)

Section.propTypes = propTypes
Section.defaultProps = defaultProps

export { Section }
