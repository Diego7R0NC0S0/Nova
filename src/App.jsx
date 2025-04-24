import React from 'react'
import Hero from './componets/Hero'
import About from './componets/About'
import Navbar from './componets/Navbar'
import Features from './componets/Features'
import Story from './componets/Story'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden '>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App