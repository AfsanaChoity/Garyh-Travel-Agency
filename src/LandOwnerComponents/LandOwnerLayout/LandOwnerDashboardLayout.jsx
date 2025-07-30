

import { Outlet } from 'react-router-dom'
import Navbar from '../SharedComponents/Header/Navbar'
import LandownerSidebar from '../SharedComponents/LandownerSidebar/LandownerSidebar'


export default function LandOwnerDashboardLayout() {
  return (
    <div className='container mx-auto '>
      <div className=''>
        <Navbar></Navbar>
      </div>
      <div className='flex'>
        {/* Sidebar hidden on small devices */}
        <div className='hidden md:block md:w-[26%] '>
          <LandownerSidebar></LandownerSidebar>
        </div>
        {/* Main content area */}
        <div className=' p-8 w-full'>
          <Outlet />
        </div>


      </div>
     
    </div>
  )
}
