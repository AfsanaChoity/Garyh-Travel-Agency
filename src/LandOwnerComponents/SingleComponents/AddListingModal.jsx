import { useState } from "react"
import { X, Upload, Calendar } from "lucide-react"
import CustomButton from "../../Component/Shared/CustomButton"

export default function AddListingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    address: "",
    rvSizeLimit: "",
    amenities: {
      wifi: false,
      water: false,
      firepit: false,
    },
    price: "",
    priceUnit: "Night",
    agreeToTerms: false,
  })
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity],
      },
    }))
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    console.log("Uploaded files:", uploadedFiles)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark semi-transparent background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Modal Content */}
      <div className="relative bg-[#fff] border border-gray-200 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-0 pt-8">
          <h2 className="text-xl font-semibold text-gray-900">List Your Spot</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Address / GPS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Address / GPS</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter full address"
            />
          </div>

          {/* Upload Spot Photos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Spot Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center hover:border-gray-400 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-600 font-medium">Upload</span>
              </label>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">{uploadedFiles.length} file(s) selected</div>
            )}
          </div>

          {/* RV Size Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">RV Size Limit</label>
            <select
              value={formData.rvSizeLimit}
              onChange={(e) => handleInputChange("rvSizeLimit", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select size limit</option>
              <option value="small">Small (up to 25 ft)</option>
              <option value="medium">Medium (26-35 ft)</option>
              <option value="large">Large (36-45 ft)</option>
              <option value="xlarge">Extra Large (45+ ft)</option>
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
            <div className="flex space-x-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.amenities.wifi}
                  onChange={() => handleAmenityChange("wifi")}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700">Wi-Fi</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.amenities.water}
                  onChange={() => handleAmenityChange("water")}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700">Water</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.amenities.firepit}
                  onChange={() => handleAmenityChange("firepit")}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700">Firepit</span>
              </label>
            </div>
          </div>

          {/* Available Dates */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Dates</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select dates"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readOnly
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="0"
              />
              <select
                value={formData.priceUnit}
                onChange={(e) => handleInputChange("priceUnit", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="Night">Night</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </select>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
              />
              <span className="ml-2 text-sm text-gray-700">I agree to the Terms & Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <CustomButton text="Submit" />
        </form>
      </div>
    </div>
  )
}
