import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience/>
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
