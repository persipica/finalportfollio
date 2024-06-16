import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Teamprojects from './components/Teamprojects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const app = () => {
  return (
    <>
      <Header />

      <Intro />
      <About />
      <Projects />
      <Teamprojects />
      <Contact />

      <Footer />
    </>
  )
}

export default app
