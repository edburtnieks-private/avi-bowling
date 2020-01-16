import styled from 'styled-components'

const Navigation = styled.nav`
  margin-bottom: var(--s-m);

  @media (min-width: 1024px) {
    margin-bottom: var(--s-0);
  }
`

const List = styled.ul`
  margin: var(--s-0);

  @media (min-width: 1024px) {
    display: flex;
  }
`

export { Navigation, List }
