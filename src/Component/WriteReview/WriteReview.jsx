

import { useState } from "react"
import { Upload, X } from "lucide-react"
import CustomButton from "../Shared/CustomButton"

export default function WriteReview() {
  const [reviewText, setReviewText] = useState("")
  const [uploadedImages, setUploadedImages] = useState([])

  const handleReviewChange = (e) => {
    setReviewText(e.target.value)
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    }))
    setUploadedImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (imageId) => {
    setUploadedImages((prev) => {
      const imageToRemove = prev.find((img) => img.id === imageId)
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.url)
      }
      return prev.filter((img) => img.id !== imageId)
    })
  }

  const handleSubmit = () => {
    console.log("Review submitted:", {
      text: reviewText,
      images: uploadedImages,
    })
    // Handle form submission here
  }

  return (
    <div className="mt-20">
      <div className=" rounded-lg border border-gray-200 p-8 mb-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Write a Review</h2>

        {/* Review Text Area */}
        <div className="mb-6">
          <textarea
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="Write your reviews and thoughts here"
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Upload Images Section */}
        <div className="mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Upload Images</p>
            </label>
          </div>

          {/* Display Uploaded Images */}
          {uploadedImages.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {uploadedImages.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.name}
                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    onClick={() => removeImage(image.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

       
      </div>
      <CustomButton text="Submit"></CustomButton>
      
    </div>
  )
}
