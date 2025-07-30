import React from "react";

const bookings = [
  {
    id: 1,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
    
  },
  {
    id: 2,
   Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 3,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 4,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 5,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 6,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 7,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 8,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
  {
    id: 9,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
   {
    id: 9,
    Date: "June 5",
    Amount: "$120  ",
    Status: "Paid ",
    TransactionID: "TXN-34523",
  },
];

export default function EarningTable() {
  return (
    <div className="overflow-x-auto  ">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-5 text-left text-sm font-medium text-gray-700">
              Date 
            </th>
            <th className=" py-5 text-left text-sm font-medium text-gray-700">
              Amount
            </th>
            <th className=" py-5 text-left text-sm font-medium text-gray-700">
              Status
            </th>
            <th className=" py-4 text-left text-sm font-medium text-gray-700">
              Transaction ID
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
                {booking.Date}
              </td>
              <td className=" py-5 text-sm text-gray-900">
                {booking.Amount}
              </td>
              
              <td className=" py-5 text-sm text-gray-900">
                <span className="border border-green-400 py-1 px-2 rounded-2xl bg-green-100">{booking.Status}</span>
              </td>
              <td className=" py-5 text-sm text-gray-900 ">
                {booking.TransactionID}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
