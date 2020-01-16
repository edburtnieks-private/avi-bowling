import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { SectionTitle } from '../../../../components/SectionTitle'

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
    <SectionTitle>
      <FormattedMessage id="we-offer" />
    </SectionTitle>

    <S.OfferList>
      {offers.map(offer => (
        <S.Offer key={offer.key}>
          <S.Image />
          {offer.text}
        </S.Offer>
      ))}
    </S.OfferList>
  </>
)

WeOffer.propTypes = propTypes

export { WeOffer }
