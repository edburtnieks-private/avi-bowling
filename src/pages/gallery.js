import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const GalleryPage = () => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <SEO title={formatMessage({ id: 'navigation-gallery' })} />

      <h1>Gallery Page</h1>
    </Layout>
  )
}

export default GalleryPage
