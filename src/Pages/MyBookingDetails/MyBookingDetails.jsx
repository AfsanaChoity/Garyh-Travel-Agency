import React from 'react'
import BookingPageTopSection from '../../Component/BookingPageTopSection/BookingPageTopSection'
import BookingOverview from '../../Component/BookingOverview/BookingOverview'
import BookingMap from '../../Component/BookingMap/BookingMap'
import BookingAmenities from '../../Component/BookingAmenties/BookingAmenties'
import BookingReviews from '../../Component/BookingReviews/BookingReviews'


import { IoIosArrowForward, IoMdShare } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Divider, IconButton } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import img1 from '../../assets/images/MyBookingDetails/img1.jpg';
import img2 from '../../assets/images/MyBookingDetails/img2.jpg';
import img3 from '../../assets/images/MyBookingDetails/img3.jpg';
import img4 from '../../assets/images/MyBookingDetails/img4.jpg';
import img5 from '../../assets/images/MyBookingDetails/img5.jpg';


export default function MyBookingDetails() {
  return (
    <div className='container mx-auto px-4 lg:px-10'>
        {/* Top section */}
        <div>
            <div className='pt-8 pb-8'>
                  {/* ///////// */}
                  <div className='flex font-medium items-center gap-3 text-[11px] md:text-[16px]'>
                    <p className='text-[#FF8682]'>Maharashtra</p>
                    <IoIosArrowForward />
                    <p className='text-[#FF8682]'>Pune</p>
                    <IoIosArrowForward />
                    <p>Pine Creek Retreat</p>
            
                  </div>
            
                 
            
            
                  {/* images */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                    <div>
                      <img src={img1} alt="" className='lg:h-[606px] w-full object-cover'/>
                    </div>
                    <div className='flex flex-col gap-2 '>
                          <div className='grid grid-cols-2 gap-2  '>
                            <img src={img2} alt="" className='h-[200px] lg:h-[300px] w-[345px] object-cover'/>
                            <img src={img3} alt="" className='h-[200px] lg:h-[300px] w-[345px] object-cover' />
                          </div>
                          <div className='grid grid-cols-2 gap-2 '>
                            <img src={img4} alt="" className='h-[200px] lg:h-[300px] w-[345px] object-cover'/>
                            <img src={img5} alt="" className='h-[200px] lg:h-[300px] w-[345px] object-cover'/>
                          </div>
                    </div>
                  </div>
            
                  {/* devider */}
                  <div className='mt-10'>
                    <Divider/>
                  </div>
                </div>
        </div>

        <BookingOverview></BookingOverview>
        <BookingMap></BookingMap>
        <BookingAmenities></BookingAmenities>
        <BookingReviews></BookingReviews>
    </div>
  )
}
