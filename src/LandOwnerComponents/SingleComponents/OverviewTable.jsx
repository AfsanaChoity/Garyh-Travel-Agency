

import { Check, X } from "lucide-react"

export default function OverviewTable() {
  const bookings = [
    {
      id: 1,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Pending",
    },
    {
      id: 2,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
    {
      id: 3,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
    {
      id: 4,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Declined",
    },
    {
      id: 5,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
    {
      id: 6,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
    {
      id: 7,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
    {
      id: 8,
      guestName: "Emilly.S",
      spotName: "Sunset Camp",
      dateRange: "July2- July 4",
      status: "Approve",
    },
  ]

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium"

    switch (status) {
      case "Pending":
        return `${baseClasses} bg-orange-100 text-orange-800`
      case "Approve":
        return `${baseClasses} bg-green-100 text-green-800`
      case "Declined":
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const handleApprove = (bookingId) => {
    console.log(`Approving booking ${bookingId}`)
  }

  const handleDecline = (bookingId) => {
    console.log(`Declining booking ${bookingId}`)
  }

  return (
    <div className="w-full">
      {/* Table Container - Scrollable on small devices */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] ">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Guest Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Spot Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date Range</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                {/* Guest Name */}
                <td className="px-6 py-4 text-sm text-gray-900">{booking.guestName}</td>

                {/* Spot Name */}
                <td className="px-6 py-4 text-sm text-gray-900">{booking.spotName}</td>

                {/* Date Range */}
                <td className="px-6 py-4 text-sm text-gray-900">{booking.dateRange}</td>

                {/* Status */}
                <td className="px-6 py-4 text-center">
                  <span className={getStatusBadge(booking.status)}>{booking.status}</span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApprove(booking.id)}
                      className="w-8 h-8  hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                      title="Approve"
                    >
                      <Check className="w-8 h-8 text-green-500" />
                    </button>
                    <button
                      onClick={() => handleDecline(booking.id)}
                      className="w-8 h-8  hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                      title="Decline"
                    >
                      <X className="w-8 h-8 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
