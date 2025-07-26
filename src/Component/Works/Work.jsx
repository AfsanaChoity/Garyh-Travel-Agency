import React from 'react';
import "./Work.css"
import { FaSearch, FaMoon } from 'react-icons/fa';
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import people1 from "../../assets/people1.png"
import people2 from "../../assets/people2.png"
import { TbBackground } from 'react-icons/tb';

const Works = () => {
    return (
        <div>
            <div className=''>
                <div className='text-center mt-15 mb-10 text-3xl font-bold'>
                    <h1>How It Works</h1>
                </div>
                <div className="flex items-center justify-center ">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl w-full mx-10">


                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center h-100">
                            <FaSearch className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Search Frusted land</h3>
                            <p className="text-gray-600">Locate Verified, off-gird stays.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
                            <LiaCarSideSolid className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Park your RV Safely</h3>
                            <p className="text-gray-600">Reserve Your Spot and travel.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
                            <FaMoon className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Sleep under the stars</h3>
                            <p className="text-gray-600">Retax in a secure environment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >


                <h1 className='flex justify-center items-center mt-10 mb-10 text-4xl font-bold'>Why RVnBo?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-20 gap-4">
                    <h2 className='flex text-xl md:text-2xl'><LiaCheckSolid className='text-2xl md:text-4xl' />Verified landowners</h2>
                    <h2 className='flex text-xl md:text-2xl'><LiaCheckSolid className='text-2xl md:text-4xl' />Stay off-grid or with lice</h2>
                    <h2 className='flex text-xl md:text-2xl'><LiaCheckSolid className='text-2xl md:text-4xl' />Secure GPS navigation</h2>
                    <h2 className='flex text-xl md:text-2xl'><LiaCheckSolid className='text-2xl md:text-4xl' />Affordable ad with hookups</h2>
                    
                    
                </div>
            </div>
            <div>

                <div className='text-center text-5xl mt-9 pt-10 font-semibold mb-10'>
                    <p>Don’t just take our words</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-10 lg:mb-20">
                    
                    {/* Card 1 */}
                    <div className="lg:flex lg:gap-4">
                        <img src={people1} alt="Logo" className="lg:w-[50%] w-[100%] h-84  object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="mt-4 lg:w-[40%]">
                            {/* Star Row */}
                            <div className="flex gap-1 text-yellow-500">
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</h3>

                            {/* Paragraph */}
                            <h3 className="text-lg font-semibold">Jenny Wilson</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="lg:flex lg:gap-4">
                        <img src={people2} alt="Logo" className="lg:w-[50%] w-[100%] h-84  object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="mt-4 lg:w-[40%]">
                            {/* Star Row */}
                            <div className="flex gap-1" style={{Color: '#1E91B6' }}>
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</h3>

                            {/* Paragraph */}
                            <h3 className="text-lg font-semibold">Devon Lane</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Works;