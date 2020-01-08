import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
  </>
)

Layout.propTypes = propTypes

export { Layout }
