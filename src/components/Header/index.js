import React, { useState } from 'react'
import {
  useIntl,
  changeLocale,
  Link,
  FormattedMessage,
} from 'gatsby-plugin-intl'

import { Logo } from '../Logo'
import { Navigation } from '../Navigation'

import * as routes from '../../routes'

import * as S from './styled'

const Header = () => {
  const { formatMessage } = useIntl()
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  const links = [
    {
      path: routes.HOME,
      text: formatMessage({ id: 'navigation-home' }),
    },
    {
      path: routes.GALLERY,
      text: formatMessage({ id: 'navigation-gallery' }),
    },
    {
      path: routes.OFFERS,
      text: formatMessage({ id: 'navigation-offers' }),
    },
    {
      path: routes.NEWS,
      text: formatMessage({ id: 'navigation-news' }),
    },
    {
      path: routes.CONTACTS,
      text: formatMessage({ id: 'navigation-contacts' }),
    },
  ]

  return (
    <S.Header>
      <S.HeaderInner>
        <Link to={routes.HOME}>
          <Logo />
        </Link>

        <S.NavigationToggle onClick={toggleNavigation}>
          <FormattedMessage id="menu" />
        </S.NavigationToggle>

        <S.NavigationWrapper data-show-navigation-content={isNavigationOpen}>
          <Navigation links={links} />

          <S.RightWrapper>
            <S.Button secondary="true" to={routes.RESERVATION}>
              <FormattedMessage id="make-reservation" />
            </S.Button>

            <S.LanguageList>
              <S.LanguageListItem>
                <S.LanguageButton onClick={() => changeLocale('lv')}>
                  Latviešu
                </S.LanguageButton>
              </S.LanguageListItem>

              <S.LanguageListItem>
                <S.LanguageButton onClick={() => changeLocale('en')}>
                  English
                </S.LanguageButton>
              </S.LanguageListItem>
            </S.LanguageList>
          </S.RightWrapper>
        </S.NavigationWrapper>
      </S.HeaderInner>
    </S.Header>
  )
}

export { Header }
