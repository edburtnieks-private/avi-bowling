import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import * as S from './styled'

const propTypes = {
  message: PropTypes.string.isRequired,
}

const ErrorMessage = ({ message }) => (
  <S.ErrorMessage>
    <FormattedMessage id={message} />
  </S.ErrorMessage>
)

ErrorMessage.propTypes = propTypes

export { ErrorMessage }
