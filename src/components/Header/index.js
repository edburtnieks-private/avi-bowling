import React, { useState } from 'react'
import {
  useIntl,
  changeLocale,
  Link,
  FormattedMessage,
} from 'gatsby-plugin-intl'

import { Logo } from '../Logo'
import { Navigation } from '../Navigation'
import {
  StyledHeader,
  StyledHeaderInner,
  StyledNavigationWrapper,
  StyledNavigationToggle,
  StyledRightWrapper,
  StyledMakeReservationButton,
  StyledLanguageList,
  StyledLanguageListItem,
  StyledLanguageButton,
} from './styled'

import * as routes from '../../routes'

const Header = () => {
  const intl = useIntl()
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  const links = [
    {
      path: routes.HOME,
      text: intl.formatMessage({ id: 'navigation_home' }),
    },
    {
      path: routes.GALLERY,
      text: intl.formatMessage({ id: 'navigation_gallery' }),
    },
    {
      path: routes.OFFERS,
      text: intl.formatMessage({ id: 'navigation_offers' }),
    },
    {
      path: routes.NEWS,
      text: intl.formatMessage({ id: 'navigation_news' }),
    },
    {
      path: routes.CONTACTS,
      text: intl.formatMessage({ id: 'navigation_contacts' }),
    },
  ]

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Link to={routes.HOME}>
          <Logo />
        </Link>

        <StyledNavigationToggle onClick={toggleNavigation}>
          <FormattedMessage id="menu" />
        </StyledNavigationToggle>

        <StyledNavigationWrapper
          data-show-navigation-content={isNavigationOpen}
        >
          <Navigation links={links} />

          <StyledRightWrapper>
            <StyledMakeReservationButton to={routes.RESERVATION}>
              <FormattedMessage id="make_reservation" />
            </StyledMakeReservationButton>

            <StyledLanguageList>
              <StyledLanguageListItem>
                <StyledLanguageButton onClick={() => changeLocale('lv')}>
                  Latviešu
                </StyledLanguageButton>
              </StyledLanguageListItem>

              <StyledLanguageListItem>
                <StyledLanguageButton onClick={() => changeLocale('en')}>
                  English
                </StyledLanguageButton>
              </StyledLanguageListItem>
            </StyledLanguageList>
          </StyledRightWrapper>
        </StyledNavigationWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  )
}

export { Header }
