import React from 'react'
import Navbar from '../Header/Navbar'
import Sidebar from '../Shared/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function TravelerLayout() {
  return (
    <div className='container mx-auto'>
        <Navbar></Navbar>
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet/>
        </div>
    </div>
  )
}
