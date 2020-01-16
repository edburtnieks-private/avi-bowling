import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Section } from '../components/Section'

import { ReservationForm } from './Home/components/ReservationForm'
import { Title } from './Home/components/Title'
import { WeOffer } from './Home/components/WeOffer'

import { TitleSection } from './Home/components/Title/styled'

const IndexPage = () => {
  const intl = useIntl()

  const offers = [
    {
      text: `10 ${intl.formatMessage({ id: 'we-offer-alleys' })}`,
      key: 'we-offer-alleys',
    },
    {
      text: intl.formatMessage({ id: 'we-offer-food-and-drinks' }),
      key: 'we-offer-food-and-drinks',
    },
    {
      text: intl.formatMessage({ id: 'we-offer-events-and-parties' }),
      key: 'we-offer-events-and-parties',
    },
    {
      text: intl.formatMessage({ id: 'we-offer-instructors' }),
      key: 'we-offer-instructors',
    },
    {
      text: intl.formatMessage({ id: 'we-offer-training' }),
      key: 'we-offer-training',
    },
    {
      text: intl.formatMessage({ id: 'we-offer-bowling-club' }),
      key: 'we-offer-bowling-club',
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'navigation-home' })} />

      <Section
        maxWidth="320"
        spacingTop="var(--s-m)"
        spacingTopTablet="var(--s-l)"
        centerTablet
      >
        <ReservationForm />
      </Section>

      <Section
        spacingTop="default"
        customSection={() => (
          <TitleSection maxWidth="515">
            <Title />
          </TitleSection>
        )}
      />

      <Section spacingTop="var(--s-xxxl)" center>
        <WeOffer offers={offers} />
      </Section>
    </Layout>
  )
}

export default IndexPage
