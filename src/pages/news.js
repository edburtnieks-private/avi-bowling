import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const NewsPage = () => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <SEO title={formatMessage({ id: 'navigation-news' })} />

      <h1>News Page</h1>
    </Layout>
  )
}

export default NewsPage
