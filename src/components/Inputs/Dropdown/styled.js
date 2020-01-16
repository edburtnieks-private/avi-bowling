import styled, { css } from 'styled-components'

import { globalInputCss, globalInputButtonCss } from '../BaseInput/styled'
import { CaretWrapper, LeftPart, RightPart } from '../../Icons/Caret/styled'

const inputDropdownCss = css`
  ${globalInputCss}

  min-width: 200px;
`

const defaultDropownCss = css`
  background: none;
  border: 0;
  color: var(--c-blue);
  outline: 0;

  &:hover,
  &:focus {
    &:not(:disabled) {
      text-decoration: underline;
    }
  }
`

const DropdownToggle = styled.button`
  ${props => (props.value ? inputDropdownCss : defaultDropownCss)}

  ${props =>
    props.isOpen &&
    css`
      ${LeftPart} {
        transform: rotate(-45deg);
      }

      ${RightPart} {
        transform: rotate(45deg);
      }
    `}

    &:disabled {
    ${LeftPart},
    ${RightPart} {
      background-color: var(--c-silver);
    }
  }
`

const DropdownValueWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${CaretWrapper} {
    margin-left: var(--s-xxs);
  }
`

const DropdownContent = styled.div`
  background-color: var(--c-white);
  border-radius: var(--br-base);
  display: none;
  left: 16px;
  max-height: calc(100% - 32px);
  overflow-y: auto;
  padding: var(--s-xs);
  position: fixed;
  right: 16px;
  top: 16px;
  z-index: var(--zi-dropdown-content);

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}

  @media (min-width: 768px) {
    box-shadow: var(--bs-input);
    left: auto;
    margin-top: var(--s-xxs);
    max-width: 100%;
    overflow: visible;
    position: absolute;
    right: auto;
    top: auto;
  }
`

const BackgroundOverlay = styled.div`
  background-color: var(--c-mine-shaft-30);
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: var(--zi-dropdown-overlay);

  @media (min-width: 768px) {
    display: none;
  }

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`

const CloseButton = styled.button`
  ${globalInputButtonCss}

  align-items: center;
  display: flex;
  padding: var(--s-xxs);
  position: fixed;
  right: 8px;
  top: 8px;
  width: auto;

  @media (min-width: 768px) {
    position: absolute;
    right: -16px;
    top: -16px;
  }
`

const CloseText = styled.span`
  font-size: var(--fs-xxs);
  font-weight: var(--fw-bold);
  margin-left: var(--s-xxs);
  text-transform: uppercase;
`

export {
  DropdownToggle,
  DropdownValueWrapper,
  DropdownContent,
  BackgroundOverlay,
  CloseButton,
  CloseText,
}
