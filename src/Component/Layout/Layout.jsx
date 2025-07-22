import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footers/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>    
    </>
  )
}
