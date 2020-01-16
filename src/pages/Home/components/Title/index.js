import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { H1, P } from '../../../../components/Typography'

const Title = () => (
  <>
    <H1>
      <FormattedMessage id="avi-bowling-title" />
    </H1>
    <P>
      <FormattedMessage id="avi-bowling-subtitle" />
    </P>
  </>
)

export { Title }
