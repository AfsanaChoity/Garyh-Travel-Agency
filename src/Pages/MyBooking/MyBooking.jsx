

import { ChevronRight } from "lucide-react"
import img from "../../assets/pic1.jpg"
import { Divider } from "@mui/material"
import CustomPagination from "../../Component/Shared/CustomPagination"
const MyBooking = () => {
    const bookings = [
        {
            id: 1,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 2,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 3,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Canceled",
        },
        {
            id: 4,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 5,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 6,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 7,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 8,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Canceled",
        },
        {
            id: 9,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
        {
            id: 10,
            propertyName: "Pine Creek Retreat",
            location: "Pine Creek Retreat",
            price: "$185.00",
            bookingDate: "June 2, 2025 19:28",
            image: img,
            status: "Completed",
        },
    ]

    const handleViewDetails = (bookingId) => {
        console.log("View details for booking:", bookingId)
        // Navigate to booking details page
    }

    const handleViewAll = () => {
        console.log("View all bookings")
        // Navigate to all bookings page
    }

    return (
        <div className=" mt-10 ">
            {/* Header */}
            <div className=" mb-6">
                <h2 className="md:text-xl  font-semibold text-gray-900 mb-4">My Booking</h2>
                <div className="flex items-center gap-2 text-sm">
                    <p className="font-semibold">All</p>
                    <Divider orientation="vertical" flexItem />
                    <p className="text-gray-500">Completed</p>
                    <Divider orientation="vertical" flexItem />
                    <p className="text-gray-500">Canceled</p>
                </div>
            </div>

            {/* Table Container */}
            {/* <div className="rounded-lg border border-gray-200 overflow-hidden"> */}
            <div className="overflow-x-auto">
                <div className="min-w-[600px] rounded-lg border border-gray-200 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-gray-50 px-4 md:px-6 py-3 border-b border-gray-200 ">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-5 md:col-span-6">
                                <span className="text-sm font-medium text-gray-700">Place</span>
                            </div>
                            <div className="col-span-4 md:col-span-3 text-center">
                                <span className="text-sm font-medium text-gray-700">Date Booking</span>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-center">
                                <span className="text-sm font-medium text-gray-700">Action</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-200">
                        {bookings.map((booking, index) => (
                            <div
                                key={booking.id}
                                className={`px-4 md:px-6 py-4 hover:bg-gray-50 transition-colors bg-[#fff]`}
                            >
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    {/* Place Column */}
                                    <div className="col-span-5 md:col-span-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={booking.image || "/placeholder.svg"}
                                                    alt={booking.propertyName}
                                                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover border border-gray-200"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                                                    {booking.propertyName}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                                    </div>
                                                    <span className="text-xs md:text-sm text-gray-600 truncate">{booking.location}</span>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <span className="text-xs md:text-sm text-gray-500">$</span>
                                                        <span className="text-sm md:text-sm font-medium text-gray-900">
                                                            {booking.price.replace("$", "")}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Booking Column */}
                                    <div className="col-span-4 md:col-span-3 text-center">
                                        <span className="text-xs md:text-sm text-gray-600">{booking.bookingDate}</span>
                                    </div>

                                    {/* Action Column */}
                                    <div className="col-span-3 md:col-span-3 text-center">
                                       
                                        <span
                                            className={`px-3 py-1 text-xs md:text-sm font-medium rounded-md h-[48px] w-[136px] 
    ${booking.status === "Canceled"
                                                    ? "bg-[#CC0A51] text-white"
                                                    : "bg-[#468F9D] text-white"
                                                }`}
                                        >
                                            {booking.status === "Canceled" ? "Canceled" : "Completed"}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Pagination */}
            <CustomPagination></CustomPagination>
        </div>
    )
}

export default MyBooking
