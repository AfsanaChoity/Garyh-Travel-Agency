import React from 'react'

export default function WorkFlexBox({icon, heading, subheading}) {
  return (
    <div className='border border-gray-300 rounded shadow-xl flex flex-col items-center  py-16 lg:py-28 space-y-4'>
        <img className='w-[70px] h-[70px]' src={icon} alt="" />
        <h3 className='text-xl lg:text-3xl font-semibold my-2'>{heading}</h3>
        <p className='text-gray-600 lg:text-xl'>{subheading}</p>
    </div>
  )
}
