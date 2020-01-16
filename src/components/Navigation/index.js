import React from 'react'

import { NavigationLink } from '../NavigationLink'

import * as S from './styled'

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

export { Navigation }
