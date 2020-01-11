import React from 'react'

import { NavigationLink } from '../NavigationLink'

import { StyledNavigation, StyledList } from './styled'

const Navigation = ({ links }) => (
  <StyledNavigation>
    <StyledList>
      {links.map(link => (
        <NavigationLink key={link.path} to={link.path}>
          {link.text}
        </NavigationLink>
      ))}
    </StyledList>
  </StyledNavigation>
)

export { Navigation }
