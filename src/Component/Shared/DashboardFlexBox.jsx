import React from 'react'
import SharedHeading from './SharedHeading'
import SharedText from './SharedText'

export default function DashboardFlexBox({ heading, subHeading, icon, color }) {
  const isImage = typeof icon === 'string'; // check if icon is an image path

  return (
    <div className='rounded p-6 flex items-center justify-between' style={{ backgroundColor: color }}>
      <div className='flex flex-col space-y-2'>
        <SharedHeading text={heading} />
        <SharedText text={subHeading} />
      </div>
      
      <div className='bg-[#FFFFFF] rounded w-[64px] h-[64px] flex items-center justify-center text-3xl text-[#468F9D]'>
        {isImage ? (
          <img src={icon} alt="icon" className="w-8 h-8 object-contain" />
        ) : (
          icon
        )}
      </div>
    </div>
  )
}
