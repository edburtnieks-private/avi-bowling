import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage as RHFErrorMessage } from 'react-hook-form'

import { ErrorMessage } from '../ErrorMessage'

import { ErrorMessageWrapper } from '../ErrorMessage/styled'
import * as S from './styled'

const propTypes = {
  name: PropTypes.string.isRequired,
}

const Calendar = ({ name, ...props }) => {
  return (
    <>
      <S.Calendar {...props} />

      <ErrorMessageWrapper>
        <RHFErrorMessage
          name={name}
          children={({ message }) => <ErrorMessage message={message} />} // eslint-disable-line react/no-children-prop
        />
      </ErrorMessageWrapper>
    </>
  )
}

Calendar.propTypes = propTypes

export { Calendar }
