import React from 'react'
import { motion } from 'framer-motion'
import NavbarBanner from '../Components/LandingPage/NavbarBanner'
import Hero from '../Components/LandingPage/Hero'
import NumberCounter from '../Components/LandingPage/NumberCounter'
import WhyChooseUs from '../Components/LandingPage/WhyChooseUs'
import Banner from '../Components/LandingPage/Banner'
import TrendingCourses from '../Components/LandingPage/TrendingCourses'
import Testimonials from '../Components/LandingPage/Testimonials'


function LandingPage() {
  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: 30 }
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -30 }}
        // transition={{ duration: 0.5 }}
      >
        <NavbarBanner />
        <Hero />
        <NumberCounter />
        <WhyChooseUs />
        <Banner />
        <TrendingCourses />
        <Testimonials />
        
                
      </motion.div>
    </>
  )
}

export default LandingPage