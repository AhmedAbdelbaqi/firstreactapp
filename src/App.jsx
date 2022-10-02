import React from 'react'
import Header from './components/header/Header' 
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portofolio from './components/portfolio/portfolio'
import Testmonials from './components/testmonials/testmonials'
import Contact from './components/contact/contact'
import {footer as Footer} from './components/footer/footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portofolio />
    <Testmonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
