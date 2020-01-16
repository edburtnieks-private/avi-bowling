import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { H2 } from '../../../../components/Typography'

import * as S from './styled'

const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      key: PropTypes.string,
    })
  ).isRequired,
}

const WeOffer = ({ offers }) => (
  <>
    <H2>
      <FormattedMessage id="we-offer" />
    </H2>

    <S.OfferList>
      {offers.map(offer => (
        <S.Offer key={offer.key}>{offer.text}</S.Offer>
      ))}
    </S.OfferList>
  </>
)

WeOffer.propTypes = propTypes

export { WeOffer }
