import React from 'react'
import SharedHeading from './SharedHeading'
import SharedText from './SharedText'

export default function DashboardFlexBox({ heading, subHeading, icon, color }) {
  return (
    <div className=' rounded p-6 flex items-center justify-between ' style={{ backgroundColor: color }}>
      <div className=' flex flex-col space-y-2'>

        <SharedHeading text={heading}></SharedHeading>
        <SharedText text={subHeading}></SharedText>
      </div>
      <div className='bg-[#FFFFFF] rounded w-[64px] h-[64px] flex items-center justify-center'>
        <img src={icon} alt="" />
      </div>

    
    </div>
  )
}
