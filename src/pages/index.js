import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { ReservationForm } from '../components/ReservationForm'

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation-home' })} />

      <ReservationForm />
    </Layout>
  )
}

export default IndexPage
