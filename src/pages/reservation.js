import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const ReservationPage = () => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <SEO title={formatMessage({ id: 'navigation-reservation' })} />

      <h1>Reservation Page</h1>
    </Layout>
  )
}

export default ReservationPage
