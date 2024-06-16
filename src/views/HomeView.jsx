import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Teamprojects from '../components/Teamprojects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <About />
        <Projects />
        <Teamprojects />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView
