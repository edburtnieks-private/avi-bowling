import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { H2 } from '../Typography'
import { Caret } from '../Icons/Caret'

import * as S from './styled'

const propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  link: '',
  linkText: '',
}

const SectionTitle = ({ link, linkText, children }) => (
  <S.SectionTitle>
    <H2>{children}</H2>

    {link && linkText && (
      <S.Link to={link}>
        <FormattedMessage id={linkText} />
        <Caret right blue />
      </S.Link>
    )}
  </S.SectionTitle>
)

SectionTitle.propTypes = propTypes
SectionTitle.defaultProps = defaultProps

export { SectionTitle }
