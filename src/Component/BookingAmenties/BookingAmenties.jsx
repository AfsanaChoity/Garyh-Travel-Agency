

import { Button } from "@mui/material"
import { Waves, Wifi, Coffee } from "lucide-react"

export default function BookingAmenities() {
  const amenities = [
    {
      icon: <Waves className="w-5 h-5 text-gray-600" />,
      name: "Outdoor pool",
    },
    {
      icon: <Wifi className="w-5 h-5 text-gray-600" />,
      name: "Free Wi-Fi",
    },
    {
      icon: <Waves className="w-5 h-5 text-gray-600" />,
      name: "Indoor pool",
    },
    {
      icon: <Coffee className="w-5 h-5 text-gray-600" />,
      name: "Tea/Coffee machine",
    },
  ]

  const handleShowMore = () => {
    console.log("Show more amenities")
  }

  return (
    <div className="my-10">
      {/* Top Border */}
      <div className="border-t border-gray-300 mb-8"></div>

      {/* Amenities Heading */}
      <h2 className="text-[#112211] font-semibold text-[24px] mb-8">Amenities</h2>

      {/* Amenities Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0">{amenity.icon}</div>
            <span className="text-gray-700 text-base">{amenity.name}</span>
          </div>
        ))}
      </div>

      {/* Show More Link */}
     <Button
  onClick={handleShowMore}
  sx={{
    color: '#468F9D',
    fontWeight: 500,
    fontSize: '1rem',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    transition: 'all 0.2s',
    '&:hover': {
      color: 'teal.700',
      textUnderlineOffset: '4px',
    },
  }}
>
  +24 more
</Button>

      {/* Bottom Border */}
      <div className="border-b border-gray-300 mt-8"></div>
    </div>
  )
}
