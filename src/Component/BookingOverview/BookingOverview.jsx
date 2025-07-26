

import { Trees, Music } from "lucide-react"
import star from '../../assets/star.png'
import { colors, Divider } from "@mui/material"

export default function BookingOverview() {
    return (
        <div className="">
            {/* Overview Heading */}
            <h2 className="text-[#112211] font-semibold text-[24px] mb-6">Overview</h2>

            {/* Description Text */}
            <div className="space-y-4 mb-8 text-[#112211] font-medium leading-relaxed">
                <p>
                    Riverbend Retreat is a top-rated off-grid RV spot, ideal for travelers looking for a calm, nature-rich
                    experience near Sedona. Tucked away from the city buzz yet easily accessible, this site offers a scenic escape
                    with essential amenities.
                </p>
                <p>
                    Recommended by 90% of travelers, the spot is rated ⭐ 4.7 out of 5, marking it as an excellent choice for RV
                    explorers seeking comfort and quiet.
                </p>
                <p>
                    Riverbend Retreat is a top-rated off-grid RV spot, ideal for travelers looking for a calm, nature-rich
                    experience near Sedona. Tucked away from the city buzz yet easily accessible, this site offers a scenic escape
                    with essential amenities.
                </p>
                <p>
                    Recommended by 90% of travelers, the spot is rated ⭐ 4.7 out of 5, marking it as an excellent choice for RV
                    explorers seeking comfort and quiet.
                </p>
            </div>

            {/* Rating and Amenities Cards */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {/* Rating Card */}
                <div className="bg-[#468F9D] text-white rounded-lg p-6 w-[166px] h-[145px]">
                    <div className="text-3xl font-bold mb-2">4.2</div>
                    <div className="text-sm">
                        <div className="font-medium">Very good</div>
                        <div className="opacity-90">371 reviews</div>
                    </div>
                </div>

                {/* Near Park Card */}
                <div className="w-[166px] h-[145px] border border-gray-300 rounded-lg p-6  ">
                    <img src={star} alt="" className="mb-10" />
                    <p className="font-medium text-gray-700">Near park</p>

                </div>


                {/* Near Nightlife Card */}
                <div className="w-[166px] h-[145px] border border-gray-300 rounded-lg p-6  ">
                    <img src={star} alt="" className="mb-10" />
                    <p className="font-medium text-gray-700">Near nightlife</p>

                </div>
            </div>

            {/* Bottom Border */}
            <div className='mt-10 mb-10'>
                <hr className="mt-10 mb-10 " />
                <Divider />
            </div>
        </div>
    )
}
