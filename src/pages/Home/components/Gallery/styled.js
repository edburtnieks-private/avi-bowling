import styled from 'styled-components'

const Gallery = styled.ul`
  display: grid;
  grid-auto-columns: 200px;
  grid-auto-rows: 200px;
  grid-gap: var(--s-l);
  list-style-type: none;
  margin: var(--s-0);
  padding: var(--s-0);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 200px);
  }
`

const Image = styled.li`
  background-color: var(--c-mercury);
`

export { Gallery, Image }
