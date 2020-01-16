import styled from 'styled-components'
import { Calendar as ReactCalendar } from 'react-calendar'

import { LeftPart, RightPart } from '../Icons/Caret/styled'

const Calendar = styled(ReactCalendar)`
  border: none;
  font-family: var(--ff-base);
  line-height: var(--lh-base);
  width: 100%;

  @media (min-width: 768px) {
    width: 350px;
  }

  .react-calendar__tile {
    padding: var(--s-xxxs);

    abbr {
      border-radius: 50%;
      display: inline-block;
      min-width: 32px;
      padding: var(--s-xxs);
    }
  }

  .react-calendar__month-view__days__day:enabled {
    &:hover,
    &:focus {
      background: none;

      abbr {
        box-shadow: var(--bs-input-hover);
      }
    }
  }

  .react-calendar__tile--active:enabled {
    background: none;
    color: var(--c-white);

    &:hover,
    &:focus {
      abbr {
        background: var(--c-green-darker);
        box-shadow: none;
      }
    }

    abbr {
      background: var(--c-green);
    }
  }

  .react-calendar__tile:disabled,
  .react-calendar__navigation button[disabled] {
    background: none;
    color: var(--c-silver);
  }

  .react-calendar__navigation button[disabled] {
    ${LeftPart},
    ${RightPart} {
      background-color: var(--c-silver);
    }
  }

  .react-calendar__month-view__weekdays {
    font-weight: var(--fw-regular);
    text-transform: none;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__year-view__months__month:enabled {
    &:hover,
    &:focus {
      background: var(--c-green);
      color: var(--c-white);
    }
  }

  .react-calendar__tile--hasActive:enabled {
    background: var(--c-green);
    color: var(--c-white);

    &:hover,
    &:focus {
      background: var(--c-green-darker);
    }
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__days__day--weekend {
    color: var(--c-red);
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--c-boulder);
  }
`

export { Calendar }
