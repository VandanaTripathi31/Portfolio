import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Mywork from './components/My Work/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Mywork/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App