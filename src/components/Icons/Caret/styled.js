import styled, { css } from 'styled-components'

const partsCss = css`
  background-color: var(--c-mine-shaft);
  display: inline-block;
  height: 2px;
  position: absolute;
  top: 50%;
  transition: transform 0.2s ease;
  width: 7.75px;
`

const CaretWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LeftPart = styled.div`
  ${partsCss}

  left: 0;
  transform: rotate(45deg);
`

const RightPart = styled.div`
  ${partsCss}

  right: 0;
  transform: rotate(-45deg);
`

const Caret = styled.div`
  height: 12px;
  position: relative;
  width: 12px;

  ${props =>
    props.left &&
    css`
      transform: rotate(90deg);
    `}

  ${props =>
    props.right &&
    css`
      transform: rotate(-90deg);
    `}

  ${props =>
    props.blue &&
    css`
      ${LeftPart},
      ${RightPart} {
        background-color: var(--c-blue);
      }
    `}
`

export { CaretWrapper, Caret, LeftPart, RightPart }
