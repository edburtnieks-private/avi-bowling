import styled from 'styled-components'
import { Link } from '../Button/styled'

import { containerCss } from '../Container/styled'

const Header = styled.header`
  background-color: var(--c-white);
  box-shadow: var(--bs-header);
  font-size: var(--fs-base);
  padding: var(--s-xxs) var(--s-s);

  @media (min-width: 1024px) {
    font-size: var(--fs-s);
    padding: var(--s-s);
  }
`

const HeaderInner = styled.div`
  ${containerCss}

  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NavigationWrapper = styled.div`
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

const NavigationToggle = styled.button`
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

const RightWrapper = styled.div`
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
  }
`

const Button = styled(Link)`
  @media (min-width: 768px) {
    font-size: var(--fs-s);
    padding: var(--s-btn-s-mobile);
  }

  @media (min-width: 1024px) {
    font-size: var(--fs-xs);
    padding: var(--s-btn-s);
  }
`

const LanguageList = styled.ul`
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

const LanguageListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: var(--s-xs);
  }
`

const LanguageButton = styled.button`
  background-color: var(--c-white);
  border: 0;
  padding: var(--s-0);
`

export {
  Header,
  HeaderInner,
  NavigationWrapper,
  NavigationToggle,
  RightWrapper,
  Button,
  LanguageList,
  LanguageListItem,
  LanguageButton,
}
