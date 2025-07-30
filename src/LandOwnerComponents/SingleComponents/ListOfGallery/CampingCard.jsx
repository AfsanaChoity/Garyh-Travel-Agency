

import { MapPin, Droplets, Flame, Zap, DollarSign } from "lucide-react"
import img from "../../../assets/LandOwnerImages/gallery.jpg"

export default function CampingCard() {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="h-68 overflow-hidden">
        <img
          src={img}
          alt="Shady Forest Retreat"
          className="w-full h-full object-cover object-bottom-left "
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold flex text-gray-900 mb-3">Shady Forest Retreat</h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Location : Sedona, Arizona</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-700">Water</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">Firepit</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-700">Electric Hookup</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-gray-900">Price : $35</span>
        </div>

        {/* View Listing Button */}
        <button className="bg-[#468F9D] text-white cursor-pointer py-2 px-4 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">
          View Listing
        </button>
      </div>
    </div>
  )
}
