import styled from 'styled-components'

const OfferList = styled.ul`
  display: grid;
  grid-gap: var(--s-xxl);
  justify-items: center;
  list-style-type: none;
  margin: var(--s-0);
  padding: var(--s-0);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Offer = styled.li``

export { OfferList, Offer }
