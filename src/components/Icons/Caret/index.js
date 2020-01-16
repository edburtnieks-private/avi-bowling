import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  blue: PropTypes.bool,
}

const defaultProps = {
  left: false,
  right: false,
  blue: false,
}

const Caret = ({ left, right, blue }) => (
  <S.CaretWrapper>
    <S.Caret left={left} right={right} blue={blue}>
      <S.LeftPart />
      <S.RightPart />
    </S.Caret>
  </S.CaretWrapper>
)

Caret.propTypes = propTypes
Caret.defaultProps = defaultProps

export { Caret }
