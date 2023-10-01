import { useState } from 'react'
import './App.css'
import Services from './components/services'
import Footer from './components/footer/footer'
import Random from './components/Random'
function App() {
  return (
    <>
      <Services />
      <Footer />
      <Random />
    </>
  )
}

export default App
