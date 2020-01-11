import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

const StyledListItem = styled.li`
  position: relative;

  @media (min-width: 1024px) {
    padding-left: var(--s-0);

    &:not(:last-of-type) {
      margin-right: var(--s-s);
    }
  }

  @media (min-width: 1280px) {
    &:not(:last-of-type) {
      margin-right: var(--s-l);
    }
  }
`

const StyledLink = styled(Link)`
  color: var(--c-mine-shaft);
  display: block;
  padding: var(--s-base) var(--s-0) var(--s-base) var(--s-m);
  text-decoration: none;

  @media (min-width: 1024px) {
    display: inline;
    padding: var(--s-0);
  }
`

const StyledActiveIndicator = styled.img`
  left: 0;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 8px);
  visibility: hidden;

  @media (min-width: 1024px) {
    left: calc(50% - 8px);
    top: calc(100% + 4px);
  }

  &[data-active] {
    visibility: visible;
  }
`

export { StyledListItem, StyledLink, StyledActiveIndicator }
