import styled, { css } from 'styled-components'

import { Minus } from '../../Icons/Minus/styled'

import {
  globalInputWrapperCss,
  globalInputCss,
  globalInputButtonCss,
} from '../BaseInput/styled'

const IncrementInput = styled.input`
  ${globalInputCss}

  box-shadow: none;
  min-width: 0;
  padding: var(--s-xxs) var(--s-0);
  text-align: center;

  &:disabled {
    background-color: var(--c-white);
    color: var(--c-mine-shaft);
  }
`

const Button = styled.button`
  ${globalInputButtonCss}

  align-items: center;
  box-shadow: none;
  display: flex;
  justify-content: center;

  &:disabled {
    background-color: var(--c-white);

    ${Minus} {
      background-color: var(--c-silver);
    }
  }
`

const IncrementInputWrapper = styled.div`
  ${globalInputWrapperCss}

  background-color: var(--c-white);
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 120px;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: var(--c-silver);
      box-shadow: none;

      ${IncrementInput},
      ${Button} {
        &:disabled {
          background-color: var(--c-mercury);
          color: var(--c-silver);
        }
      }
    `}
`

export { IncrementInputWrapper, IncrementInput, Button }
