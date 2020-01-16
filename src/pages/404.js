import React from 'react'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={`404: ${intl.formatMessage({ id: 'not-found' })}`} />

      <h1>
        <FormattedMessage id="page-not-found" />
      </h1>
    </Layout>
  )
}

export default NotFoundPage
