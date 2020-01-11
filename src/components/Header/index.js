import React, { useState } from 'react'
import { Link } from 'gatsby'

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

const links = [
  { path: routes.HOME, text: 'Home' },
  { path: routes.GALLERY, text: 'Gallery' },
  { path: routes.SPECIAL_OFFERS, text: 'Special offers' },
  { path: routes.NEWS, text: 'News' },
  { path: routes.CONTACTS, text: 'Contacts' },
]

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Link to={routes.HOME}>
          <Logo />
        </Link>

        <StyledNavigationToggle onClick={toggleNavigation}>
          Menu
        </StyledNavigationToggle>

        <StyledNavigationWrapper
          data-show-navigation-content={isNavigationOpen}
        >
          <Navigation links={links} />

          <StyledRightWrapper>
            <StyledMakeReservationButton to={routes.RESERVATION}>
              Make Reservation
            </StyledMakeReservationButton>

            <StyledLanguageList>
              <StyledLanguageListItem>
                <StyledLanguageButton>Latviešu</StyledLanguageButton>
              </StyledLanguageListItem>

              <StyledLanguageListItem>
                <StyledLanguageButton>English</StyledLanguageButton>
              </StyledLanguageListItem>
            </StyledLanguageList>
          </StyledRightWrapper>
        </StyledNavigationWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  )
}

export { Header }
