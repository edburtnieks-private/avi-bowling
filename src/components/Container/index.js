import React from 'react'
import PropTypes from 'prop-types'

import { StyledContainer } from './styled'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

Container.propTypes = propTypes

export { Container }
