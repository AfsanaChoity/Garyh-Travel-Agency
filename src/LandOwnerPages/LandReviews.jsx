import React from 'react'
import SharedHeading from '../Component/Shared/SharedHeading'
import ReviewsTable from '../LandOwnerComponents/SingleComponents/ReviewsTable'

export default function LandReviews() {
  return (
    <div className='px-4'>
        {/* heading */}
        <div>
            <SharedHeading text="All Reviews"></SharedHeading>
        </div>

        {/* table */}
       <div className='mt-10'>
         <ReviewsTable></ReviewsTable>
       </div>
    </div>
  )
}
