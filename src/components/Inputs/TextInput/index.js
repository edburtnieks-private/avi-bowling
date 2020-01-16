import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { BaseInput } from '../BaseInput'

import * as S from './styled'

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

const TextInput = ({ name, id, label, ...rest }) => {
  const { register, errors } = useFormContext()

  return (
    <>
      <BaseInput name={name} id={id} label={label} errors={errors}>
        <S.Input name={name} id={id} ref={register} {...rest} />
      </BaseInput>
    </>
  )
}

TextInput.propTypes = propTypes

export { TextInput }
