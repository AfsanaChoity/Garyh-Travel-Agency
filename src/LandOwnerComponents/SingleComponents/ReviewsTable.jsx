import React from "react";

const bookings = [
  {
    id: 1,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 2,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 3,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 4,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 5,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 6,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 7,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 8,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
  {
    id: 9,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
   {
    id: 9,
    guestName: "Emilly.S",
    spotName: "Sunset Camp",
    rating: 5,
    dateRange: "July 2 - July 4",
    review: "Lovely host, clean and peaceful",
  },
];

export default function ReviewsTable() {
  return (
    <div className="overflow-x-auto  ">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-5 text-left text-sm font-medium text-gray-700">
              Guest Name
            </th>
            <th className=" py-5 text-left text-sm font-medium text-gray-700">
              Spot Name
            </th>
            <th className=" py-5 text-left text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className=" py-4 text-left text-sm font-medium text-gray-700">
              Date Range
            </th>
            <th className=" py-5 text-left text-sm font-medium text-gray-700">
              Review
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={booking.id}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-blue-50" : "bg-white"
              }`}
            >
              <td className="px-6 py-5 text-sm text-gray-900">
                {booking.guestName}
              </td>
              <td className=" py-5 text-sm text-gray-900">
                {booking.spotName}
              </td>
              <td className=" py-5 text-sm text-yellow-500">
                {"★".repeat(booking.rating)}
              </td>
              <td className=" py-5 text-sm text-gray-900">
                {booking.dateRange}
              </td>
              <td className=" py-5 text-sm text-gray-900 ">
                {booking.review}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
