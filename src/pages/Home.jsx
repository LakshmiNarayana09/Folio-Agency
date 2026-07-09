import React from 'react'
import HeroHeader from '../components/hero/HeroHeader'
import WhoWeAre from '../components/whoweare/WhoWeAre'
import Services from '../components/services/Services'
import Partnerships from '../components/partnerships/Partnerships'
import CTA from '../components/cta/CTA'
import Jobs from '../components/jobs/Jobs'
import ContactCTA from '../components/footer/ContactCTA'
import Footer from '../components/footer/Footer'


function Home() {
  return (
    <div className="w-full bg-white">
      <HeroHeader />
      <WhoWeAre />
      <Services />
      <Partnerships />
      <CTA />
      <Jobs />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default Home
