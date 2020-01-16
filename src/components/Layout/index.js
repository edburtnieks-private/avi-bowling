import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../Header'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

Layout.propTypes = propTypes

export { Layout }
