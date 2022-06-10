import React from 'react'
import Navbar from '../Shared/Navbar'
import AboutSection from './AboutSection'
import Header from './Header'
import ProjectSection from './ProjectSection'
import ServiceSection from './ServiceSection'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <Skills />
    </div>
  )
}

export default Home
