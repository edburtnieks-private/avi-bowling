import React from 'react'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import { SectionTitle } from '../../../../components/SectionTitle'

import { GALLERY } from '../../../../routes'

import * as S from './styled'

const Gallery = () => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <SectionTitle link={GALLERY} linkText={formatMessage({ id: 'see-all' })}>
        <FormattedMessage id="gallery" />
      </SectionTitle>

      <S.Gallery>
        <S.Image />
        <S.Image />
        <S.Image />
        <S.Image />
        <S.Image />
        <S.Image />
      </S.Gallery>
    </div>
  )
}

export { Gallery }
