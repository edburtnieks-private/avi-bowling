import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import { BaseInput } from '../BaseInput'
import { Caret } from '../../Icons/Caret'

import * as S from './styled'

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  customOptionTextEnd: PropTypes.string,
}

const defaultProps = {
  customOptionTextEnd: '',
}

const Select = ({ name, id, label, options, customOptionTextEnd, ...rest }) => {
  const { register, errors } = useFormContext()

  return (
    <BaseInput name={name} id={id} label={label} errors={errors}>
      <S.SelectWrapper>
        <S.Select name={name} id={id} ref={register} {...rest}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
              {customOptionTextEnd}
            </option>
          ))}
        </S.Select>

        <Caret />
      </S.SelectWrapper>
    </BaseInput>
  )
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

export { Select }
