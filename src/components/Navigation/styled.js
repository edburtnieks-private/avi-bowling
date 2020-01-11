import styled from 'styled-components'

const StyledNavigation = styled.nav`
  margin-bottom: var(--s-m);

  @media (min-width: 1024px) {
    margin-bottom: var(--s-0);
  }
`

const StyledList = styled.ul`
  margin: var(--s-0);

  @media (min-width: 1024px) {
    display: flex;
  }
`

export { StyledNavigation, StyledList }
