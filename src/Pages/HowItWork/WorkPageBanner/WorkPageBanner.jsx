import React from 'react'
import Button from '@mui/material/Button';

export default function WorkPageBanner({ backgroundImg, heading, subheading, buttonText, containerClassName = '' }) {
  return (
    <div className={`${containerClassName}`}>
      {/* Background Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center pl-[10%] text-white"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10  mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {heading}
          </h1>
          <p className=" md:text-2xl mb-20">
            {subheading}
          </p>
          <Button variant="contained"
            sx={{
              backgroundColor: '#468F9D',
              padding: '14px 16px',
              borderRadius: '14px',
              '&:hover': {
                backgroundColor: '#3b7e8a',
              },
             

            }}

          >{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}
