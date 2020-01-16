import styled, { css } from 'styled-components'

const SectionWrapper = styled.div`
  padding: var(--s-0) var(--s-s);

  ${props =>
    props.spacingTop === 'default'
      ? css`
          margin-top: var(--s-l);

          @media (min-width: 768px) {
            margin-top: var(--s-xl);
          }

          @media (min-width: 1024px) {
            margin-top: var(--s-xxl);
          }
        `
      : css`
          margin-top: ${props.spacingTop};
        `}

  ${props =>
    props.spacingTopTablet &&
    css`
      @media (min-width: 768px) {
        margin-top: ${props.spacingTopTablet};
      }
    `}
`

const Section = styled.section`
  margin: var(--s-0) auto;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
`

export { SectionWrapper, Section }
