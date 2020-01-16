import React from 'react'
import { ErrorMessage as RHFErrorMessage } from 'react-hook-form'

import { ErrorMessage } from '../ErrorMessage'

import { ErrorMessageWrapper } from '../ErrorMessage/styled'
import * as S from './styled'

const Calendar = ({ name, ...props }) => {
  return (
    <>
      <S.Calendar {...props} />

      <ErrorMessageWrapper>
        <RHFErrorMessage
          name={name}
          children={({ message }) => <ErrorMessage message={message} />}
        />
      </ErrorMessageWrapper>
    </>
  )
}

export { Calendar }
