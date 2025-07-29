
// // import { Box, Typography, ListItem, ListItemIcon, ListItemText } from "@mui/material"
// // import { CheckCircle, Message, AttachMoney, Info } from "@mui/icons-material"

// // export default function NotificationItem({ notification, showBorder = true }) {
// //   const getIcon = (iconType) => {
// //     switch (iconType) {
// //       case "check":
// //         return (
// //           <CheckCircle
// //             sx={{
// //               color: "white",
// //               backgroundColor: "#4caf50",
// //               borderRadius: "50%",
// //               fontSize: 24,
// //             }}
// //           />
// //         )
// //       case "message":
// //         return (
// //           <Box
// //             sx={{
              
// //               backgroundColor: "#e3f2fd",
// //               borderRadius: "50%",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <Message
// //               sx={{
// //                 color: "#1976d2",
// //                 fontSize: 14,
// //               }}
// //             />
// //           </Box>
// //         )
// //       case "payment":
// //         return (
// //           <AttachMoney
// //             sx={{
// //               color: "white",
// //               backgroundColor: "#4caf50",
// //               borderRadius: "50%",
// //               fontSize: 24,
// //             }}
// //           />
// //         )
// //       case "info":
// //         return (
// //           <Info
// //             sx={{
// //               color: "white",
// //               backgroundColor: "#2196f3",
// //               borderRadius: "50%",
// //               fontSize: 24,
// //             }}
// //           />
// //         )
// //       default:
// //         return null
// //     }
// //   }

// //   return (
// //    <ListItem
// //   sx={{
// //     py: 2,
// //     px: 3,
// //     borderBottom: showBorder ? "1px solid #f0f0f0" : "none",
// //     "&:hover": {
// //       backgroundColor: "#fafafa",
// //     },
// //     cursor: "pointer",
// //   }}
// // >
// //   <ListItemIcon sx={{ minWidth: 40 }}>{getIcon(notification.icon)}</ListItemIcon>

// //   <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
// //     <Typography
// //       variant="body1"
// //       sx={{
// //         color: "#333",
// //         fontSize: "15px",
// //         fontWeight: 400,
// //         lineHeight: 1.4,
// //         mr: 2,
// //         flex: 1,
// //       }}
// //     >
// //       {notification.message}
// //     </Typography>

// //     <Typography
// //       variant="caption"
// //       sx={{
// //         color: "#999",
// //         fontSize: "13px",
// //         whiteSpace: "nowrap", // prevents wrapping
// //       }}
// //     >
// //       {notification.timestamp}
// //     </Typography>
// //   </Box>
// // </ListItem>

// //   )
// // }

// import { FaCheckCircle, FaEnvelope, FaDollarSign, FaInfoCircle } from "react-icons/fa";

// export default function NotificationItem({ notification, showBorder = false }) {
//   const getIcon = (iconType) => {
//     switch (iconType) {
//       case "check":
//         return (
//           <FaCheckCircle className="text-white bg-green-500 rounded-full text-xl p-1" />
//         );
//       case "message":
//         return (
//           <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
//             <FaEnvelope className="text-blue-600 text-xs" />
//           </div>
//         );
//       case "payment":
//         return (
//           <FaDollarSign className="text-white bg-green-500 rounded-full text-xl p-1" />
//         );
//       case "info":
//         return (
//           <FaInfoCircle className="text-white bg-blue-500 rounded-full text-xl p-1" />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       className={`flex items-start px-4 py-3 cursor-pointer hover:bg-gray-100 ${
//         showBorder ? "border-b border-gray-200" : ""
//       }`}
//     >
//       <div className="mt-1 mr-3">{getIcon(notification.icon)}</div>

//       <div className="flex justify-between items-start w-full gap-4 flex-col sm:flex-row">
//         <p className="text-sm text-gray-800 leading-snug">{notification.message}</p>
//         <span className="text-xs text-gray-500 whitespace-nowrap">
//           {notification.timestamp}
//         </span>
//       </div>
//     </div>
//   );
// }
