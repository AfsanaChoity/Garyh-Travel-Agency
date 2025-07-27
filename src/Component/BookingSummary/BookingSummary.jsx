

import { MapPin } from "lucide-react"
import BookImg from "../../assets/BookingPageImages/bookingImg5.jpg" 

export default function BookingSummary() {
  const bookingData = {
    propertyName: "Pine Creek Retreat",
    location: "Pine Creek Retreat - Asheville, NC",
    checkIn: "June 24,2025",
    checkOut: "June 25,2025",
    totalPrice: "$175",
    propertyImage: BookImg,
  }

  return (
    <div className="mt-10">
      <div className=" rounded-xl border-2 border-gray-200 p-8 bg-[#f4f9fa]">
        {/* Header */}
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Booking Summary</h1>

        {/* Divider */}
        <hr className="border-gray-400 mb-8" />

        {/* Main Content */}
        <div className="md:flex gap-8 mb-8">
          {/* Property Image */}
          <div className="flex-shrink-0">
            <img
              src={bookingData.propertyImage || "/placeholder.svg"}
              alt="Pine Creek Retreat RV"
              className="w-72 h-48 rounded-lg object-cover"
            />
          </div>

          {/* Booking Details */}
          <div className="flex-1 space-y-4">
            <h2 className="md:text-2xl mt-4 md:mt-0 font-bold text-gray-900">{bookingData.propertyName}</h2>

            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-xs md:text-base">{bookingData.location}</span>
            </div>

            <div className="text-gray-700 text-[12px] md:text-base">
              {bookingData.checkIn}- {bookingData.checkOut}
            </div>

            <div className="pt-2">
              <div className="text-gray-700 text-[14px] md:text-base mb-1">Total Price Paid</div>
              <div className="text-xl font-semibold text-gray-900">{bookingData.totalPrice}</div>
            </div>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className=" text-[12px] md:text-lg leading-relaxed text-[#247281]">
          A Confirmation email has been sent to your inbox with all the details
        </div>
      </div>
    </div>
  )
}
