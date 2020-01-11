import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

import { containerCss } from '../Container/styled'

const StyledHeader = styled.header`
  background-color: var(--c-white);
  box-shadow: var(--bs-header);
  font-size: var(--fs-base);
  padding: var(--s-xxs) var(--s-s);

  @media (min-width: 1024px) {
    font-size: var(--fs-s);
    padding: var(--s-s);
  }
`

const StyledHeaderInner = styled.div`
  ${containerCss}

  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledNavigationWrapper = styled.div`
  @media (max-width: 1023px) {
    background-color: var(--c-white);
    bottom: 0;
    box-shadow: var(--bs-navigation);
    padding: var(--s-l) var(--s-s) var(--s-0);
    position: absolute;
    right: -348px;
    top: 0;
    transition: transform 0.2s ease-in-out;
    width: 320px;
    z-index: var(--zi-navigation);

    &[data-show-navigation-content='true'] {
      transform: translateX(-348px);
    }
  }

  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: var(--s-l);
    width: 100%;
  }

  @media (min-width: 1280px) {
    margin-left: var(--s-xxl);
  }
`

const StyledNavigationToggle = styled.button`
  background-color: var(--c-white);
  border: 0;
  font-weight: var(--fw-bold);
  padding: var(--s-0);
  text-transform: uppercase;
  z-index: var(--zi-navigation-toggle);

  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledRightWrapper = styled.div`
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
  }
`

const StyledMakeReservationButton = styled(Link)`
  background-color: var(--c-white);
  border-radius: var(--br-base);
  border: var(--bw-btn-s) solid var(--c-green);
  color: var(--c-green);
  display: block;
  font-size: var(--fs-s);
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-btn-s);
  padding: var(--s-btn-s-mobile);
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media (min-width: 1024px) {
    display: inline;
    font-size: var(--fs-xs);
    padding: var(--s-btn-s);
    width: auto;
  }

  &:hover {
    background-color: var(--c-green-darker);
    border-color: var(--c-green-darker);
    color: var(--c-white);
  }
`

const StyledLanguageList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: var(--s-l) var(--s-0) var(--s-0);
  padding: var(--s-0);

  @media (min-width: 1024px) {
    margin: var(--s-0) var(--s-0) var(--s-0) var(--s-xs);
  }

  @media (min-width: 1280px) {
    margin: var(--s-0) var(--s-0) var(--s-0) var(--s-m);
  }
`

const StyledLanguageListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: var(--s-xs);
  }
`

const StyledLanguageButton = styled.button`
  background-color: var(--c-white);
  border: 0;
  padding: var(--s-0);
`

export {
  StyledHeader,
  StyledHeaderInner,
  StyledNavigationWrapper,
  StyledNavigationToggle,
  StyledRightWrapper,
  StyledMakeReservationButton,
  StyledLanguageList,
  StyledLanguageListItem,
  StyledLanguageButton,
}
