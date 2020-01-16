import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { BaseInput } from '../BaseInput'
import { Minus } from '../../Icons/Minus'
import { Plus } from '../../Icons/Plus'

import * as S from './styled'

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

const defaultProps = {
  disabled: false,
}

const IncrementInput = ({
  name,
  id,
  label,
  minValue,
  maxValue,
  decrement,
  increment,
  disabled,
  ...rest
}) => {
  const { register, errors, setValue, getValues, watch } = useFormContext()

  const handleDecrement = () => {
    if (getValues()[name] > minValue) {
      const newValue = +getValues()[name] - 1

      decrement(newValue)

      setValue(name, newValue)
    }
  }

  const handleIncrement = () => {
    if (getValues()[name] < maxValue) {
      const newValue = +getValues()[name] + 1

      increment(newValue)

      setValue(name, newValue)
    }
  }

  return (
    <BaseInput name={name} id={id} label={label} errors={errors}>
      <S.IncrementInputWrapper disabled={disabled}>
        <S.Button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || +watch(name) <= minValue}
        >
          <Minus />
        </S.Button>

        <S.IncrementInput
          name={name}
          id={id}
          ref={register}
          disabled
          type="text"
          {...rest}
        />

        <S.Button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || +watch(name) >= maxValue}
        >
          <Plus />
        </S.Button>
      </S.IncrementInputWrapper>
    </BaseInput>
  )
}

IncrementInput.propTypes = propTypes
IncrementInput.defaultProps = defaultProps

export { IncrementInput }
