// import React, { useState } from 'react';
// import { Tabs, Input, Avatar } from 'antd';


// import './LandownerSettings.css';

// import adminImg from '../assets/LandOwnerImages/admin.jpg'
// import edit from '../assets/LandOwnerImages/edit.png'
// // import viewSign from '/images/view.png'
// // import notViewSign from '/images/notView.png'
// import CustomButton from '../Component/Shared/CustomButton';
// import { FaEye, FaEyeSlash } from 'react-icons/fa6';

// const { TabPane } = Tabs;
// const { Password } = Input;

// const passwordFields = [
//   {
//     label: 'Current Password',
//     name: 'currentPassword',
//     type: 'password',
//     placeholder: '**********',
//   },
//   {
//     label: 'New Password',
//     name: 'newPassword',
//     type: 'password',
//     placeholder: '**********',
//   },
//   {
//     label: 'Confirm Password',
//     name: 'confirmPassword',
//     type: 'password',
//     placeholder: '**********',
//   },
// ];

// export default function LandownerSettings() {
//   const [formData, setFormData] = useState({
//     name: 'Robert Smith',
//     email: 'robert@gmail.com',
//     contact: '+99007007007',
//     address: '79/A Joker Vila, Gotham City',
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSave = () => {
//   //   console.log('Saved Data:', formData);
//   // };

//   return (
//     <>
      
//         <div className="rounded-[8px] bg-white shadow-lg p-6  ">
//           {/* Back link */}

         

//           {/* Avatar and name */}
//           <div className="flex flex-col items-center">
//             <div className="relative">
//               <Avatar size={96} src={adminImg} />
//               <div className="absolute bottom-0 right-0 z-10 bg-[#468F9D] rounded-full p-1">
//                 <img src={edit} alt="camera" />
//               </div>
//             </div>
//             <h2 className="mt-2 text-[30px] font-[Inter] font-medium">Mr. Admin</h2>
//           </div>

//           {/* Tabs */}
//           <Tabs
//             defaultActiveKey="1"
//             centered
//             className="mt-4 custom-tabs"
//             tabBarStyle={{ borderBottom: 'none' }}
//           >
//             {/* Edit Profile Section */}
//             <TabPane tab="Edit Profile" key="1">
//               <h3 className="text-center text-[24px] font-[Inter] font-medium mb-6">
//                 Edit Your Profile
//               </h3>
//               <div className="space-y-4 max-w-xl mx-auto font-[Inter] font-normal text-[#333333]">
//                 <div>
//                   <label>User Name</label>
//                   <Input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="custom-placeholder"
//                     style={{ borderColor: '#468F9D', padding: '10px 16px', borderRadius: '6px' }}
//                   />
//                 </div>
//                 <div>
//                   <label>Email</label>
//                   <Input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="custom-placeholder"
//                     style={{ borderColor: '#468F9D', padding: '10px 16px', borderRadius: '6px' }}
//                   />
//                 </div>
//                 <div>
//                   <label>Contact no</label>
//                   <Input
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleChange}
//                     className="custom-placeholder"
//                     style={{ borderColor: '#468F9D', padding: '10px 16px', borderRadius: '6px' }}
//                   />
//                 </div>
//                 <div>
//                   <label>Address</label>
//                   <Input
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="custom-placeholder"
//                     style={{ borderColor: '#468F9D', padding: '10px 16px', borderRadius: '6px' }}
//                   />
//                 </div>
//                 <div className="flex justify-center text-center pt-4">
//                   <CustomButton text="Save Change"></CustomButton>
//                 </div>
//               </div>
//             </TabPane>

//             {/* Change Password Section */}
//             <TabPane tab="Change Password" key="2">
//               <h3 className="text-center text-[24px] font-[Inter] font-medium mb-6">
//                 Change Password
//               </h3>
//               <div className="space-y-4 max-w-xl mx-auto font-[Inter] font-normal text-[#333333]">
//                 {passwordFields.map((field) => (
//                   <div key={field.name} className="space-y-1">
//                     <label>{field.label}</label>
//                     <Password
//                       className="custom-placeholder"
//                       name={field.name}
//                       placeholder={field.placeholder}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       iconRender={(visible) =>
//                         visible ? (
//                           <a><FaEye className="text-gray-500"/></a>
//                         ) : (
//                           <a> <FaEyeSlash  className="text-gray-500"/></a>
//                         )
//                       }
//                       style={{
//                         borderColor: '#468F9D',
//                         padding: '10px 16px',
//                         borderRadius: '6px',
//                       }}
//                     />
//                   </div>
//                 ))}
//                 <div className="flex justify-center text-center pt-16">
//                   <CustomButton text="Save Change"></CustomButton>
//                 </div>
//               </div>
//             </TabPane>
//           </Tabs>
//         </div>
      
//     </>
//   );
// }


"use client"

import { useState } from "react"
import { Tabs, Input, Avatar } from "antd"
import "./LandownerSettings.css"
import adminImg from "../assets/LandOwnerImages/admin.jpg"
import edit from "../assets/LandOwnerImages/edit.png"
import CustomButton from "../Component/Shared/CustomButton"
import { FaEye, FaEyeSlash, FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const { TabPane } = Tabs
const { Password } = Input

const passwordFields = [
  {
    label: "Current Password",
    name: "currentPassword",
    type: "password",
    placeholder: "**********",
  },
  {
    label: "New Password",
    name: "newPassword",
    type: "password",
    placeholder: "**********",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "**********",
  },
]

const tabs = [
  { key: "1", label: "Edit Profile" },
  { key: "2", label: "Change Password" },
]

export default function LandownerSettings() {
  const [activeTab, setActiveTab] = useState("1")
  const [formData, setFormData] = useState({
    name: "Robert Smith",
    email: "robert@gmail.com",
    contact: "+99007007007",
    address: "79/A Joker Vila, Gotham City",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  const handlePrevious = () => {
    const currentIndex = tabs.findIndex((tab) => tab.key === activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].key)
    }
  }

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.key === activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].key)
    }
  }

  const currentTabIndex = tabs.findIndex((tab) => tab.key === activeTab)
  const currentTabLabel = tabs[currentTabIndex]?.label

  return (
    <>
      <div className="rounded-[8px] bg-white shadow-lg p-3 sm:p-6">
        {/* Avatar and name */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar size={96} src={adminImg} />
            <div className="absolute bottom-0 right-0 z-10 bg-[#468F9D] rounded-full p-1">
              <img src={edit || "/placeholder.svg"} alt="camera" />
            </div>
          </div>
          <h2 className="mt-2 text-[20px] sm:text-[30px] font-[Inter] font-medium">Mr. Admin</h2>
        </div>

        {/* Mobile Tab Navigation - Only visible on small devices */}
        <div className="block sm:hidden mt-4 mb-6">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <button
              onClick={handlePrevious}
              disabled={currentTabIndex === 0}
              className={`p-2 rounded-full transition-colors ${
                currentTabIndex === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-[#468F9D] hover:bg-[#468F9D] hover:text-white"
              }`}
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <div className="text-center">
              <h3 className="text-[16px] font-[Inter] font-medium text-[#468F9D]">{currentTabLabel}</h3>
              {/* <div className="flex justify-center mt-1 space-x-1">
                {tabs.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTabIndex ? "bg-[#468F9D]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div> */}
            </div>

            <button
              onClick={handleNext}
              disabled={currentTabIndex === tabs.length - 1}
              className={`p-2 rounded-full transition-colors ${
                currentTabIndex === tabs.length - 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-[#468F9D] hover:bg-[#468F9D] hover:text-white"
              }`}
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Tabs - Hidden on small devices */}
        <div className="hidden sm:block">
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            centered
            className="mt-4 custom-tabs"
            tabBarStyle={{ borderBottom: "none" }}
          >
            <TabPane tab="Edit Profile" key="1" />
            <TabPane tab="Change Password" key="2" />
          </Tabs>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {/* Edit Profile Section */}
          {activeTab === "1" && (
            <div>
              <h3 className="text-center text-[18px] sm:text-[24px] font-[Inter] font-medium mb-6 hidden sm:block">
                Edit Your Profile
              </h3>
              <div className="space-y-4 max-w-xl mx-auto font-[Inter] font-normal text-[#333333]">
                <div>
                  <label>User Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="custom-placeholder"
                    style={{ borderColor: "#468F9D", padding: "10px 16px", borderRadius: "6px" }}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-placeholder"
                    style={{ borderColor: "#468F9D", padding: "10px 16px", borderRadius: "6px" }}
                  />
                </div>
                <div>
                  <label>Contact no</label>
                  <Input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="custom-placeholder"
                    style={{ borderColor: "#468F9D", padding: "10px 16px", borderRadius: "6px" }}
                  />
                </div>
                <div>
                  <label>Address</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="custom-placeholder"
                    style={{ borderColor: "#468F9D", padding: "10px 16px", borderRadius: "6px" }}
                  />
                </div>
                <div className="flex justify-center text-center pt-4">
                  <CustomButton text="Save Change"></CustomButton>
                </div>
              </div>
            </div>
          )}

          {/* Change Password Section */}
          {activeTab === "2" && (
            <div>
              <h3 className="text-center text-[18px] sm:text-[24px] font-[Inter] font-medium mb-6 hidden sm:block">
                Change Password
              </h3>
              <div className="space-y-4 max-w-xl mx-auto font-[Inter] font-normal text-[#333333]">
                {passwordFields.map((field) => (
                  <div key={field.name} className="space-y-1">
                    <label>{field.label}</label>
                    <Password
                      className="custom-placeholder"
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      iconRender={(visible) =>
                        visible ? (
                          <a>
                            <FaEye className="text-gray-500" />
                          </a>
                        ) : (
                          <a>
                            <FaEyeSlash className="text-gray-500" />
                          </a>
                        )
                      }
                      style={{
                        borderColor: "#468F9D",
                        padding: "10px 16px",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                ))}
                <div className="flex justify-center text-center pt-16">
                  <CustomButton text="Save Change"></CustomButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
