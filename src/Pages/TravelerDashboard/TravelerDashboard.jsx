import React from 'react'
import TravelerFooter from '../../Component/Shared/TravelerFooter'
import SharedHeading from '../../Component/Shared/SharedHeading'
import SharedText from '../../Component/Shared/SharedText'
import DashboardFlexBox from '../../Component/Shared/DashboardFlexBox'

import calander from '../../assets/images/Calender.png'
import tick from '../../assets/images/tick2.png'
import cross from '../../assets/images/cross.png'

import RecentlyBookingTable from '../../Component/DashBoard/RecentlyBookingTable'

export default function TravelerDashboard() {
  return (
    <div>

      <div>
        <SharedHeading text="Hello, Esther Howard"></SharedHeading>
      </div>
      
      <div className='my-4'>
        <SharedText text="Ready for your next adventure"></SharedText>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <DashboardFlexBox heading="12" subHeading="Total Booking" icon={calander} color="#E7F0FA"></DashboardFlexBox>
        <DashboardFlexBox heading="06" subHeading="Completed" icon={tick} color="#FFF6E6"></DashboardFlexBox>
        <DashboardFlexBox heading="02" subHeading="Cancel Booking " icon={cross} color="#E6E6E6"></DashboardFlexBox>
      </div>

        {/* Table */}
      <div>
          <RecentlyBookingTable></RecentlyBookingTable>
      </div>
      
    </div>
  )
}
