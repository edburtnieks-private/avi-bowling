import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = ({ children }) => <S.Container>{children}</S.Container>

Container.propTypes = propTypes

export { Container }
