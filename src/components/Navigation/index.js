import React from 'react'
import PropTypes from 'prop-types'

import { NavigationLink } from '../NavigationLink'

import * as S from './styled'

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
}

const Navigation = ({ links }) => (
  <S.Navigation>
    <S.List>
      {links.map(link => (
        <NavigationLink key={link.path} to={link.path}>
          {link.text}
        </NavigationLink>
      ))}
    </S.List>
  </S.Navigation>
)

Navigation.propTypes = propTypes

export { Navigation }
