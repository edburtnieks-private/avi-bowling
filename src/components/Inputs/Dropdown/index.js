import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { Caret } from '../../Icons/Caret'
import { Cross } from '../../Icons/Cross'

import * as S from './styled'

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  id: '',
  value: '',
  disabled: false,
}

const Dropdown = ({
  id,
  label,
  value,
  disabled,
  isOpen,
  toggleDropdown,
  closeDropdown,
  children,
}) => {
  const onDropdownToggle = () => {
    toggleDropdown()
  }

  const onDropdownClose = () => {
    closeDropdown()
  }

  return (
    <>
      {value && <label htmlFor={id}>{label}</label>}

      <S.DropdownToggle
        type="button"
        id={id}
        value={value}
        disabled={disabled}
        isOpen={isOpen}
        onClick={onDropdownToggle}
      >
        <S.DropdownValueWrapper>
          <span>{value || label}</span>
          <Caret />
        </S.DropdownValueWrapper>
      </S.DropdownToggle>

      <S.BackgroundOverlay isOpen={isOpen} />

      <S.DropdownContent isOpen={isOpen}>
        {children}

        <S.CloseButton type="button" onClick={onDropdownClose}>
          <Cross />
          <S.CloseText>
            <FormattedMessage id="close" />
          </S.CloseText>
        </S.CloseButton>
      </S.DropdownContent>
    </>
  )
}

Dropdown.propTypes = propTypes
Dropdown.defaultProps = defaultProps

export { Dropdown }
