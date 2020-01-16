import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const ContactsPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation-contacts' })} />

      <h1>Contacts Page</h1>
    </Layout>
  )
}

export default ContactsPage
