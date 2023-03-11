import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContactInfo from './components/ContactInfo'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <ContactInfo/>
      <About />
      <Footer />
    </div>
  )
}

export default App
