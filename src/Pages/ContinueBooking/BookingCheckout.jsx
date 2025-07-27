

import { useState } from "react"
import { MapPin, Calendar, Shield } from "lucide-react"
import CustomButton from "../../Component/Shared/CustomButton"
import img from "../../assets/images/checkoutImg.jpg"
import { Divider, Radio } from "@mui/material"
import { Link } from "react-router-dom"

export default function BookingCheckout() {
  const [paymentOption, setPaymentOption] =useState('full')
  const [phoneNumber, setPhoneNumber] = useState("")

  

  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value)
  }

  return (
    <div className=" container mx-auto py-8">
      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Room Details Card */}
            <div className="rounded-lg shadow-sm border border-gray-200 p-6">

              <div className="md:flex md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Superior room - 1 double bed or 2 twin beds
                  </h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Pine Creek Retreat - Asheville, NC</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold" style={{ color: "#468F9D" }}>
                    $ 5240
                  </span>
                  <span className="text-gray-600">/night</span>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3">Pine Creek Retreat</h3>

              {/* Check-in/Check-out */}
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <div className="text-sm font-semibold md:text-[16px] text-gray-900">Thursday, Dec 8</div>
                  <div className="text-xs md:text-sm text-gray-600">Check-in</div>
                </div>
                <div className="flex items-center px-4">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-center">
                  <div className="text-sm md:text-[16px] font-semibold text-gray-900">Friday, Dec 9</div>
                  <div className="text-xs md:text-sm text-gray-600">Check-out</div>
                </div>
              </div>

              <div className="inline-block bg-gray-100 px-3 py-1 rounded text-sm text-gray-700">1 Night</div>
            </div>

            {/* Payment Options */}
            <div className="">
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg  border-gray-200 shadow-sm">
                  <input
                    type="radio"
                    name="payment"
                    value="full"
                    checked={paymentOption === "full"}
                    onChange={() => handlePaymentChange("full")}
                    className="w-4 h-4 mr-3 cursor-pointer"
                    style={{ accentColor: "#468F9D" }}
                  />
                 
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Pay in full</div>
                    <div className="text-sm text-gray-600">Pay the total and you are all set</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Login/Signup Section */}
            <div className=" rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Login or Sign up to book</h3>

              <div className="space-y-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                    style={{ focusRingColor: "#468F9D" }}
                  />
                </div>

                <p className="text-xs text-gray-600">
                  We'll call or text you to confirm your number. Standard message and data rates apply.{" "}
                  <a href="#" className="underline" style={{ color: "#468F9D" }}>
                    Privacy Policy
                  </a>
                </p>


                <Link to="/booking-confirm"><CustomButton text="Continue"></CustomButton></Link>

                <div className="text-gray-700 mt-4">
                  
                  <Divider>OR</Divider>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className=" rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* Property Image and Details */}
              <div className="flex gap-4 mb-6">
                <img
                  src={img}
                  alt="CVK Park Bosphorus"
                  className="w-26 h-26 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">CVK Park Bosphorus...</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Superior room - 1 double bed or 2 twin beds</p>
                  <div className="flex items-center gap-2">
                    <div
                      className="px-1 py-1 rounded text-xs text-[#468F9D] font-semibold border border-[#468F9D]"

                    >
                      4.2
                    </div>
                    <span className="text-xs text-gray-700"><span className="font-semibold">Very Good</span> 64 reviews</span>
                  </div>
                </div>
              </div>

              {/* Protection Notice */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-4 h-4" style={{ color: "#468F9D" }} />
                <span className="text-sm text-gray-700">
                  Your booking is protected by <strong>PhonePe</strong>
                </span>
              </div>

              {/* Price Details */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-4">Price Details</h4>

                <div className="flex justify-between">
                  <span className="text-gray-600">Base Fare</span>
                  <span className="text-gray-900">$ 240</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-gray-900">$ 0</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes</span>
                  <span className="text-gray-900">$ 20</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="text-gray-900">$ 5</span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">$ 265</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
