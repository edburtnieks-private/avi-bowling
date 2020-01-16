import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage as RHFErrorMessage } from 'react-hook-form'

import { ErrorMessage } from '../../ErrorMessage'

import { ErrorMessageWrapper } from '../../ErrorMessage/styled'

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

const BaseInput = ({ name, id, label, children }) => (
  <>
    <label htmlFor={id}>{label}</label>

    {children}

    <ErrorMessageWrapper>
      <RHFErrorMessage
        name={name}
        children={({ message }) => <ErrorMessage message={message} />}
      />
    </ErrorMessageWrapper>
  </>
)

BaseInput.propTypes = propTypes

export { BaseInput }
