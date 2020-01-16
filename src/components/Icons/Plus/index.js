import React from 'react'

import { Minus } from '../Minus'

import * as S from './styled'

const Plus = () => (
  <S.Wrapper>
    <Minus />

    <S.Vertical>
      <Minus />
    </S.Vertical>
  </S.Wrapper>
)

export { Plus }
