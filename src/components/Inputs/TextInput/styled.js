import styled from 'styled-components'

import { globalInputCss } from '../BaseInput/styled'

const Input = styled.input`
  ${globalInputCss}

  @media (min-width: 768px) {
    max-width: 176px;
  }
`

export { Input }
