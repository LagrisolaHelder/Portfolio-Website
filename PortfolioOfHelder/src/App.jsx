import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
    <Projects/>

    <Contact/>
    <Footer/>
   </>
  
  )
}

export default App