import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import * as S from './styled'

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

const Checkbox = ({ name, id, label, ...rest }) => {
  const { register } = useFormContext()

  return (
    <S.CheckboxWrapper>
      <S.Checkbox
        name={name}
        id={id}
        ref={register}
        type="checkbox"
        {...rest}
      />

      <S.Label htmlFor={id}>
        <div>{label}</div>
        <S.CustomCheckbox />
      </S.Label>
    </S.CheckboxWrapper>
  )
}

Checkbox.propTypes = propTypes

export { Checkbox }
