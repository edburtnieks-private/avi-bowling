import styled from 'styled-components'

const CheckboxWrapper = styled.div`
  display: flex;
`

const Label = styled.label`
  cursor: pointer;
  display: flex;
  padding-bottom: var(--s-0);
`

const CustomCheckbox = styled.span`
  background-color: var(--c-white);
  border-radius: 2px;
  border: 1px solid var(--c-mine-shaft);
  display: inline-block;
  height: 12px;
  margin-left: var(--s-xxs);
  position: relative;
  width: 12px;

  &::after {
    border-bottom: 1px solid;
    border-color: var(--c-mine-shaft);
    border-left: 1px solid;
    content: none;
    height: 4px;
    left: 1px;
    position: absolute;
    top: 2px;
    transform: rotate(-45deg);
    width: 8px;
  }
`

const Checkbox = styled.input`
  appearance: none;
  outline: 0;

  &:checked {
    + ${Label} {
      ${CustomCheckbox}::after {
        content: '';
      }
    }
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    + ${Label} {
      text-decoration: underline;
    }
  }

  &:disabled {
    + ${Label} {
      color: var(--c-silver);
      cursor: not-allowed;

      ${CustomCheckbox},
      ${CustomCheckbox}::after {
        border-color: var(--c-silver);
      }
    }
  }
`

export { CheckboxWrapper, Checkbox, Label, CustomCheckbox }
