import styled, { css } from 'styled-components'

const containerCss = css`
  margin: var(--s-0) auto;
  max-width: var(--bp-desktop-xl);
`

const Container = styled.div`
  ${containerCss}
`

export { Container, containerCss }
