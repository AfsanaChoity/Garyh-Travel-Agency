"use client"

import { ChevronLeft, ChevronRight, Flag } from "lucide-react"
import CustomButton from "../Shared/CustomButton"
import { Divider } from "@mui/material"
import img1 from "../../assets/reviewer/reviewer1.jpg";
import img2 from "../../assets/reviewer/reviewer2.jpg";
import img3 from "../../assets/reviewer/reviewer3.jpg";
import img4 from "../../assets/reviewer/reviewer4.jpg";
import img5 from "../../assets/reviewer/reviewer5.jpg";

export default function BookingReviews() {
    const reviews = [
        {
            id: 1,
            rating: "5.0 Amazing",
            name: "Omar Siphron",
            avatar: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 2,
            rating: "5.0 Amazing",
            name: "Cristofer Ekstrom Bothman",
            avatar: img2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            rating: "5.0 Amazing",
            name: "Kalya Lubin",
            avatar: img3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 4,
            rating: "5.0 Amazing",
            name: "Erin Septimus",
            avatar: img4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 5,
            rating: "5.0 Amazing",
            name: "Terry George",
            avatar: img5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ]

    const handleGiveReview = () => {
        console.log("Give your review clicked")
    }

    const handlePreviousPage = () => {
        console.log("Previous page")
    }

    const handleNextPage = () => {
        console.log("Next page")
    }

    const handleReportReview = (reviewId) => {
        console.log("Report review:", reviewId)
    }

    return (
        <div className="">


            {/* Header Section */}
            <div className="flex flex-col md:flex-row mb-8 md:items-center  gap-[70%]">
                <h2 className="text-[#112211] font-semibold text-[24px] mb-4">Reviews</h2>

                <CustomButton text="Give your review"></CustomButton>
            </div>

            {/* Overall Rating */}
            <div className="mb-8">
                <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-gray-900">4.2</span>
                    <div>
                        <div className="text-lg font-semibold text-gray-900">Very good</div>
                        <div className="text-sm text-gray-600">371 verified reviews</div>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="mb-6">
                <Divider />
            </div>
            {/* Reviews List */}
            <div className="space-y-6 mb-8">
                {reviews.map((review) => (
                    <div key={review.id} className="flex gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <img
                                src={review.avatar || "/placeholder.svg"}
                                alt={`${review.name} avatar`}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>

                        {/* Review Content */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-gray-900">{review.rating}</span>
                                    <span className="text-gray-600">|</span>
                                    <span className="text-gray-700">{review.name}</span>
                                </div>
                                <button
                                    onClick={() => handleReportReview(review.id)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <Flag className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{review.text}</p>

                            <div className="my-6">
                                <Divider />
                            </div>
                        </div>


                    </div>

                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4">
                <button onClick={handlePreviousPage} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-600 text-sm">1 of 40</span>
                <button onClick={handleNextPage} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Bottom Border */}
            <div className="border-b border-gray-200 mt-8"></div>
        </div>
    )
}
