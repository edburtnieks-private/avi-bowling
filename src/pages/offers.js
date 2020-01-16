import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const OffersPage = () => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <SEO title={formatMessage({ id: 'navigation-offers' })} />

      <h1>Offers Page</h1>
    </Layout>
  )
}

export default OffersPage
