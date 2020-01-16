import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Section } from '../components/Section'

import { ReservationForm } from './Home/components/ReservationForm'
import { Title } from './Home/components/Title'

import { ReservationFormSection } from './Home/components/ReservationForm/styled'
import { TitleSection } from './Home/components/Title/styled'

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation-home' })} />

      <Section
        maxWidth="320"
        spacingTop="var(--s-m)"
        spacingTopTablet="var(--s-l)"
        customSection={() => (
          <ReservationFormSection>
            <ReservationForm />
          </ReservationFormSection>
        )}
      />

      <Section
        spacingTop="default"
        customSection={() => (
          <TitleSection maxWidth="515">
            <Title />
          </TitleSection>
        )}
      />
    </Layout>
  )
}

export default IndexPage
