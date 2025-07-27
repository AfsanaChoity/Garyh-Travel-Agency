import React from 'react'
import tick from "../../assets/images/Tick.png";
import BookingSummary from '../../Component/BookingSummary/BookingSummary';
import { Link } from 'react-router-dom';
import CustomButton from '../../Component/Shared/CustomButton';
import WriteReview from '../../Component/WriteReview/WriteReview';
export default function ConfirmBooking() {
  return (
    <div className='container mx-auto py-10 px-4'>
        {/* Top */}
        <div className='flex flex-col items-center space-y-14'>
            <img src={tick} alt="" className='w-[100px] h-[100px] md:w-[180px] md:h-[180px]'/>
            <h1 className='font-medium text-4xl md:text-6xl'>Your Booking is Confirmed</h1>
            <p className='text-[22px] md:text-[32px] text-gray-600'>Thanks for choosing RVnBo. Your next adventure is ready</p>
        </div>

        {/* Booking summary */}
        <BookingSummary></BookingSummary>

        {/* Button */}
        <div className='flex flex-col md:flex-row gap-4 mt-8'>
            <Link to="/explore">
            <CustomButton text="View More Spot"></CustomButton>
           
            </Link>

            <Link to="/">
             <CustomButton text="Back My Home"></CustomButton>
            </Link>
        </div>

        {/* Write review */}
        <WriteReview></WriteReview>
    </div>
  )
}
