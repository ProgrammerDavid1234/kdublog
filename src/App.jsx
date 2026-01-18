import React from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Events from './Components/Events/Events.jsx'
import Feature from './Components/Feature/Feature.jsx'
import LatestNews from './Components/LatestNews/LatestNews.jsx'
import Newsletter from './Components/Newsletter/Newsletter.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Events />
      <Feature />
      <LatestNews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
