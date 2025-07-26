import React from 'react'
import Navbar from '../Header/Navbar'
import Home from '../Homes/Home'
import Footer from '../Footers/Footer'
import Roadmap from '../Roadmaps/Roadmap'
import Works from '../Works/Work'
import Banner from '../Banner/Banner'

export default function HomePage() {
  return (
   
    <div className='container mx-auto'>
    
    {/* Banner */}
    <Banner></Banner>
    {/* Home Component */}
    <div>
        <Home></Home>
    </div>

    {/* Road Map Component */}
    <Roadmap></Roadmap>

    {/* Works Component */}
    <Works></Works>
    
    
    </div>
  )
}
