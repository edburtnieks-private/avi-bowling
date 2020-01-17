// @flow
import * as React from 'react'

import * as S from './styled'

type ButtonProps = {
  primary: boolean,
  secondary: boolean,
  to: string,
  disabled: boolean,
  children: ?React.Node,
}
type ButtonType = React.StatelessFunctionalComponent<ButtonProps>

const Button: ButtonType = ({
  primary = true,
  secondary = false,
  to = '',
  disabled = false,
  children,
}: ButtonProps) => {
  return to ? (
    <S.Link primary={primary} secondary={secondary} to={to} disabled={disabled}>
      {children}
    </S.Link>
  ) : (
    <S.Button primary={primary} secondary={secondary} disabled={disabled}>
      {children}
    </S.Button>
  )
}

export { Button }
