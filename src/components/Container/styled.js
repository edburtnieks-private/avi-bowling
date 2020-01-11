import styled, { css } from 'styled-components'

const containerCss = css`
  margin: var(--s-0) auto;
  max-width: var(--bp-desktop-xl);
`

const StyledContainer = styled.div`
  ${containerCss}
`

export { StyledContainer, containerCss }
