"use client"

import { CheckCircle, MessageCircle, DollarSign } from "lucide-react"

export default function NotificationsTable() {
  const notifications = [
    {
      id: 1,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Yellowstone RV Park",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "message",
      icon: "message",
      message: "Host John sent you a message",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      type: "payment_success",
      icon: "payment",
      message: "Payment of $200 was successful",
      timestamp: "1 day ago",
    },
    {
      id: 4,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Mountain View campsite",
      timestamp: "1 day ago",
    },
    {
      id: 5,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Yellowstone RV Park",
      timestamp: "2 hours ago",
    },
    {
      id: 6,
      type: "message",
      icon: "message",
      message: "Host John sent you a message",
      timestamp: "1 day ago",
    },
    {
      id: 7,
      type: "payment_success",
      icon: "payment",
      message: "Payment of $200 was successful",
      timestamp: "1 day ago",
    },
    {
      id: 8,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Mountain View campsite",
      timestamp: "1 day ago",
    },
    {
      id: 9,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Yellowstone RV Park",
      timestamp: "2 hours ago",
    },
    {
      id: 10,
      type: "message",
      icon: "message",
      message: "Host John sent you a message",
      timestamp: "1 day ago",
    },
    {
      id: 11,
      type: "payment_success",
      icon: "payment",
      message: "Payment of $200 was successful",
      timestamp: "1 day ago",
    },
    {
      id: 12,
      type: "booking_confirmed",
      icon: "check",
      message: "Your booking was confirmed for Mountain View campsite",
      timestamp: "1 day ago",
    },
  ]

  const getIcon = (iconType) => {
    switch (iconType) {
      case "check":
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        )
      case "message":
        return (
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
          </div>
        )
      case "payment":
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-[#fff] rounded-lg shadow-sm overflow-auto">
      <div className="divide-y divide-gray-100">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className="flex justify-between gap-2 items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {/* Icon */}
            <div className="">{getIcon(notification.icon)}</div>

            {/* Message */}
            <div className="">
              <p className="text-gray-900 text-sm font-normal leading-5">{notification.message}</p>
            </div>
            </div>

            {/* Timestamp */}
            <div className=" ml-4 hidden md:block">
              <span className="text-gray-500 text-xs">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
