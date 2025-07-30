import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../SharedComponents/Header/Navbar'
import Footer from '../../Component/Footers/Footer'

export default function LandOwnerLayout() {
  return (
    <>
    <Navbar></Navbar>
    <div className='container mx-auto'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>    
    </>
  )
}
