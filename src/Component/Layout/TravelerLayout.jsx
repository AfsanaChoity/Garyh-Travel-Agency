import React from 'react'
import Navbar from '../Header/Navbar'
import Sidebar from '../Shared/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import TravelerFooter from '../Shared/TravelerFooter'

export default function TravelerLayout() {
  return (
    <div className='container mx-auto'>
      <div className=''>
        <Navbar></Navbar>
      </div>
      <div className='flex'>
        {/* Sidebar hidden on small devices */}
        <div className='hidden  md:block md:w-[26%] '>
          <Sidebar></Sidebar>
        </div>
        {/* Main content area */}
        <div className='md:bg-gray-100 p-8 w-full'>
          <Outlet />
        </div>


      </div>
      <div>
        <TravelerFooter></TravelerFooter>
      </div>
    </div>
  )
}
