// @flow
import styled, { css } from 'styled-components'
import { Link as IntlLink } from 'gatsby-plugin-intl'

const primaryButtonCss = css`
  background-color: var(--c-green);
  color: var(--c-white);

  &:hover,
  &:focus {
    background-color: var(--c-green-darker);
    border-color: var(--c-green-darker);
    color: var(--c-white);
  }

  ${props =>
    props.disabled &&
    css`
      background-color: var(--c-mercury);
      border-color: var(--c-mercury);
      color: var(--c-silver);
    `}
`

const secondaryButtonCss = css`
  background-color: var(--c-white);
  color: var(--c-green);

  &:hover,
  &:focus {
    background-color: var(--c-green);
    color: var(--c-white);
  }

  ${props =>
    props.disabled &&
    css`
      background-color: var(--c-white);
      border-color: var(--c-silver);
      color: var(--c-silver);
    `}
`

const buttonCss = css`
  border-radius: var(--br-base);
  border: var(--bw-btn-s) solid var(--c-green);
  display: block;
  font-size: var(--fs-s);
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-btn-s);
  outline: 0;
  padding: var(--s-btn-s-mobile);
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media (min-width: 768px) {
    padding: var(--s-btn-s);
    width: auto;
  }

  /* Primary button styles */
  ${props => props.primary && primaryButtonCss}

  /* Secondary button styles */
  ${props => props.secondary && secondaryButtonCss}
`

const Button = styled.button`
  ${buttonCss}
`

const Link = styled(IntlLink)`
  ${buttonCss}
`

export { Button, Link }
