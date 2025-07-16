import React from 'react';
import "./Work.css"
import { FaSearch, FaMoon } from 'react-icons/fa';
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import people1 from "../../assets/people1.png"
import people2 from "../../assets/people2.png"

const Works = () => {
    return (
        <div>
            <div className='card'>
                <div className='text-center mt-15 mb-10 text-3xl font-bold'>
                    <h1>How It Works</h1>
                </div>
                <div className="flex items-center justify-center p-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">


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
            <div>
                <h1 className='flex justify-center items-center mt-10 mb-10 text-4xl font-bold'>Why RVnBo?</h1>
                <div className="flex justify-center items-center gap-5 h-48 max-w-6xl mx-auto">
                    <div className="flex-1 p-4  h-full flex flex-col gap-10 justify-center text-left text-3xl">
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Verified landowners</h2>
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Stay off-grid or with lice</h2>
                    </div>
                    <div className="flex-1 p-4  h-full flex flex-col gap-10 justify-center text-left text-3xl">
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Secure GPS navigation</h2>
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Affordable ad with hookups</h2>
                    </div>
                </div>
            </div>
            <div>


                <div className="flex gap-6 w-full p-40">
                    {/* Card 1 */}
                    <div className="flex w-1/2 p-4 items-center gap-4">
                        <img src={people1} alt="Logo" className="w-84 h-84 object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="flex-1 flex flex-col justify-between text-left h-full py-2">
                            {/* Star Row */}
                            <div className="flex gap-1 text-yellow-500">
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</h3>

                            {/* Paragraph */}
                            <h3 className="text-lg font-semibold">Jenny Wilson</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex w-1/2 p-4 items-center gap-4">
                        <img src={people2} alt="Logo" className="w-84 h-84 object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="flex-1 flex flex-col justify-between text-left h-full py-2">
                            {/* Star Row */}
                            <div className="flex gap-1 text-yellow-500">
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
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