import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const OffersPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation-offers' })} />

      <h1>Offers Page</h1>
    </Layout>
  )
}

export default OffersPage
