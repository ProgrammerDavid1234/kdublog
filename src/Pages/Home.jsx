import React from 'react'
import Hero from '../Components/Hero/Hero.jsx'
import Events from '../Components/Events/Events.jsx'
import Feature from '../Components/Feature/Feature.jsx'
import LatestNews from '../Components/LatestNews/LatestNews.jsx'
import Newsletter from '../Components/Newsletter/Newsletter.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <Events />
            <Feature />
            <LatestNews />
            <Newsletter />
        </>
    )
}

export default Home
