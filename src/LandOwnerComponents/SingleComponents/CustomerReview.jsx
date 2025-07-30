import React from 'react'
import people1 from "../../assets/people1.png"
import people2 from "../../assets/people2.png"
import { FaStar } from 'react-icons/fa'
export default function CustomerReview() {
  return (
    <div>
         <div className='text-center text-2xl font-semibold lg:text-4xl mt-9 pt-10 mb-16'>
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
  )
}
