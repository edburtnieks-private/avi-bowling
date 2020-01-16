import styled from 'styled-components'

import { globalInputCss } from '../BaseInput/styled'
import {
  Caret,
  CaretWrapper,
  LeftPart,
  RightPart,
} from '../../Icons/Caret/styled'

const SelectWrapper = styled.div`
  position: relative;

  ${Caret} {
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: calc(50% - 6px);
  }
`

const Select = styled.select`
  ${globalInputCss}

  appearance: none;

  &:disabled {
    + ${CaretWrapper} {
      ${LeftPart},
      ${RightPart} {
        background-color: var(--c-silver);
      }
    }
  }
`

export { SelectWrapper, Select }
