import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const propTypes = {
  spacingTop: PropTypes.string,
  spacingTopTablet: PropTypes.string,
  maxWidth: PropTypes.string,
  customSection: PropTypes.func,
  center: PropTypes.bool,
  centerTablet: PropTypes.bool,
  children: PropTypes.node,
}

const defaultProps = {
  spacingTop: '',
  spacingTopTablet: '',
  maxWidth: '',
  customSection: undefined,
  center: false,
  centerTablet: false,
  children: '',
}

const Section = ({
  spacingTop,
  spacingTopTablet,
  maxWidth,
  customSection,
  center,
  centerTablet,
  children,
}) => (
  <S.SectionWrapper spacingTop={spacingTop} spacingTopTablet={spacingTopTablet}>
    {customSection ? (
      customSection(children)
    ) : (
      <S.Section
        maxWidth={maxWidth}
        center={center}
        centerTablet={centerTablet}
      >
        {children}
      </S.Section>
    )}
  </S.SectionWrapper>
)

Section.propTypes = propTypes
Section.defaultProps = defaultProps

export { Section }
