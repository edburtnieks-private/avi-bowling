import styled from 'styled-components'
import { Link as IntlLink } from 'gatsby-plugin-intl'

import { Caret } from '../Icons/Caret/styled'

const SectionTitle = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: var(--s-xxl);
`

const Link = styled(IntlLink)`
  align-items: center;
  color: var(--c-blue);
  display: flex;
  font-size: var(--fs-s);
  margin-left: var(--s-s);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  ${Caret} {
    margin-left: var(--s-xxs);
  }
`

export { SectionTitle, Link }
