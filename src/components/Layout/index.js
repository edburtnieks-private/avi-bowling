import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../Header'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = propTypes

export { Layout }
