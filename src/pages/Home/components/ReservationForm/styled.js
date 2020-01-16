import styled, { css } from 'styled-components'

const MainFields = styled.div`
  margin-bottom: var(--s-s);

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: var(--s-xs);
  }
`

const DateAndTimeFields = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const CalendarWrapper = styled.div`
  margin-bottom: var(--s-s);

  @media (min-width: 768px) {
    margin-bottom: var(--s-0);
    margin-right: var(--s-s);
  }
`

const TimeFields = styled.div``

const SecondaryFields = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const LaneInformationFields = styled.div`
  margin-bottom: var(--s-m);

  @media (min-width: 768px) {
    margin-bottom: var(--s-0);
    margin-right: var(--s-m);
  }
`

const PlayerNameFields = styled.div``

const Footer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const MoreDetailsDropdownWrapper = styled.div`
  display: inline-block;
  margin-bottom: var(--s-s);

  @media (min-width: 768px) {
    margin-bottom: var(--s-0);
  }
`

const Field = styled.div`
  &:not(:last-of-type) {
    margin-bottom: var(--s-s);
  }

  @media (min-width: 768px) {
    &:not(:last-of-type) {
      margin-bottom: var(--s-0);
      margin-right: var(--s-xxs);
    }

    ${props =>
      props.vertical &&
      css`
        &:not(:last-of-type) {
          margin-bottom: var(--s-xxxs);
          margin-right: var(--s-0);
        }
      `}
  }
`

export {
  MainFields,
  DateAndTimeFields,
  CalendarWrapper,
  TimeFields,
  SecondaryFields,
  LaneInformationFields,
  PlayerNameFields,
  Footer,
  MoreDetailsDropdownWrapper,
  Field,
}
