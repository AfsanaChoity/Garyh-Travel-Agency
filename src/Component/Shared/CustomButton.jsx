import React from 'react'

export default function CustomButton({text}) {
  return (
    <div>
      <button
            type="submit"
            className="w-full py-3 bg-[#468F9D] text-white rounded-lg font-semibold text-lg hover:bg-teal-600 transition duration-300"
          >
            {text}
          </button>
    </div>
  )
}
