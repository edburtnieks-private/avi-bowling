import styled from 'styled-components'

const OfferList = styled.ul`
  display: grid;
  grid-auto-rows: 200px;
  grid-gap: var(--s-xxl);
  list-style-type: none;
  margin: var(--s-0);
  padding: var(--s-0);
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 200px);
  }
`

const Offer = styled.li``

const Image = styled.div`
  background-color: var(--c-mercury);
  height: 100%;
  margin-bottom: var(--s-xs);
`

export { OfferList, Offer, Image }
