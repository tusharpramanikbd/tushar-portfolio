import React from 'react'
import Navbar from '../Shared/Navbar'
import AboutSection from './AboutSection'
import Header from './Header'
import ServiceSection from './ServiceSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection />
      <ServiceSection />
    </div>
  )
}

export default Home
