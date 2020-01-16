import { css } from 'styled-components'

const globalInputWrapperCss = css`
  border-radius: var(--br-base);
  box-shadow: var(--bs-input);
`

const globalInputCss = css`
  ${globalInputWrapperCss}

  background-color: var(--c-white);
  border: 0;
  color: var(--c-mine-shaft);
  font-size: 1rem;
  outline: 0;
  padding: var(--s-xxs) var(--s-xs);
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: var(--bs-input-hover), var(--bs-input);
  }

  &:disabled {
    background-color: var(--c-mercury);
    box-shadow: none;
    color: var(--c-silver);
  }
`

const globalInputButtonCss = css`
  ${globalInputCss}
`

export { globalInputWrapperCss, globalInputCss, globalInputButtonCss }
