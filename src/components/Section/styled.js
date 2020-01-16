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

const alignmentCss = css`
  display: flex;
  flex-direction: column;
`

const Section = styled.section`
  margin: var(--s-0) auto;
  max-width: var(--bp-desktop-xl);

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}

  ${props =>
    props.center &&
    css`
      ${alignmentCss}
      align-items: center;
    `}

  ${props =>
    props.centerTablet &&
    css`
      @media (min-width: 768px) {
        ${alignmentCss}
        align-items: center;
        max-width: var(--bp-desktop-xl);
      }
    `}

  ${props =>
    props.rightDesktop &&
    css`
      @media (min-width: 1024px) {
        ${alignmentCss}
        align-items: flex-end;
      }
    `}
`

export { SectionWrapper, Section }
