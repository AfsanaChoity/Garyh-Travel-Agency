import React from 'react'
import SharedHeading from '../Component/Shared/SharedHeading'
import OverviewTable from '../LandOwnerComponents/SingleComponents/OverviewTable'

export default function ManageBooking() {
  return (
    <div>
        {/* heading */}
        <div>
            <SharedHeading text="Manage Booking"></SharedHeading>
        </div>

        {/* table */}
        <div className='mt-10'>
            <OverviewTable></OverviewTable>
        </div>
    </div>
    
  )
}
