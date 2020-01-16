import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  primary: true,
  secondary: false,
  to: '',
  disabled: false,
}

const Button = ({ primary = true, secondary, to, disabled, children }) =>
  to ? (
    <S.Link primary={primary} secondary={secondary} to={to} disabled={disabled}>
      {children}
    </S.Link>
  ) : (
    <S.Button primary={primary} secondary={secondary} disabled={disabled}>
      {children}
    </S.Button>
  )

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export { Button }
