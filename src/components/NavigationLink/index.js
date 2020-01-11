import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import BowlingBallIcon from '../../images/icons/bowling-ball-icon.svg'

import { StyledListItem, StyledLink, StyledActiveIndicator } from './styled'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const NavigationLink = ({ to, children }) => {
  const setActiveIndicator = node => {
    if (node && node.classList.contains('active-link')) {
      const activeIndicatorElement = document.querySelector(
        '.active-link + .active-indicator'
      )

      activeIndicatorElement.dataset.active = true
    }
  }

  const changeActiveLink = event => {
    event.preventDefault()

    const clickedElement = event.target

    // Get active link indicator
    const firstElement = document.querySelector('[data-active]')
    // Get clicked link indicator
    const lastElement = clickedElement.parentElement.querySelector(
      '.active-indicator'
    )

    if (firstElement && lastElement) {
      const first = firstElement.getBoundingClientRect()
      const last = lastElement.getBoundingClientRect()

      // Change / move active indicator to clicked link
      delete firstElement.dataset.active
      lastElement.dataset.active = true

      // Calculate difference between active and clicked link
      const deltaX = first.left - last.left
      const deltaY = first.top - last.top

      lastElement.animate(
        [
          {
            transformOrigin: 'center',
            transform: `
              translate(${deltaX}px, ${deltaY}px)
              ${deltaY === 0 ? `rotate(${deltaX < 0 ? '-' : ''}360deg)` : ''}
            `,
          },
          {
            transformOrigin: 'center',
            transform: 'none',
          },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
          fill: 'both',
        }
      )

      setTimeout(() => {
        navigate(to)
      }, 500)
    } else {
      navigate(to)
    }
  }

  return (
    <StyledListItem>
      <StyledLink
        to={to}
        activeClassName="active-link"
        ref={node => setActiveIndicator(node)}
        onClick={changeActiveLink}
      >
        {children}
      </StyledLink>

      <StyledActiveIndicator
        src={BowlingBallIcon}
        alt="Active link indicator"
        className="active-indicator"
        aria-hidden="true"
      />
    </StyledListItem>
  )
}

NavigationLink.propTypes = propTypes

export { NavigationLink }
