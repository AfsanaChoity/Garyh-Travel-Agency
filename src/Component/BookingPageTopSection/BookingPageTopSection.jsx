import React from 'react'
import { IoIosArrowForward, IoMdShare } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Divider, IconButton } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CustomButton from '../Shared/CustomButton';
import img1 from '../../assets/ChangedImages/img1.jpg';
import img2 from '../../assets/ChangedImages/img2.jpg';
import img3 from '../../assets/ChangedImages/img3.jpg';
import img4 from '../../assets/ChangedImages/img4.jpg';
import img5 from '../../assets/ChangedImages/img5.jpg';
import { Link } from 'react-router-dom';

export default function BookingPageTopSection() {
  return (
    <div className='pt-8 pb-8'>
      {/* ///////// */}
      <div className='flex font-medium items-center gap-3 text-[11px] md:text-[16px]'>
        <p className='text-[#FF8682]'>Maharashtra</p>
        <IoIosArrowForward />
        <p className='text-[#FF8682]'>Pune</p>
        <IoIosArrowForward />
        <p>Pine Creek Retreat</p>

      </div>

      {/* ////////// */}
      <div className='mt-4 flex flex-col md:flex-row gap-10 md:justify-between'>
        {/* text */}
        <div className=' flex flex-col space-y-2'>
          <h1 className='text-[#112211] font-semibold text-[24px]'>Pine Creek Retreat</h1>
          <div className='flex items-center gap-1 '>
            <IoLocation />
            <p>Pine Creek Retreat – Asheville, NC</p>
          </div>

          <div className='flex items-center gap-2'>
            <div className='h-[32px] w-[40px] border border-gray-500 rounded flex justify-center items-center'><p>4.2</p></div>
            <p ><span className='font-semibold'>Very Good</span> 371 reviews</p>

          </div>

        </div>

        {/* Price & button */}
        <div className='flex flex-col space-y-2 items-end'>
          <p className='font-bold text-[32px] text-[#468F9D]'>$ 2349 <span className=' text-[20px]'>/night</span></p>

          <div className='flex gap-2'>
            <IconButton
              sx={{
                border: "2px solid #b2d9c6",
                borderRadius: 2,
                background: "#fff",

                p: 1
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#468F9D", fontSize: 26, background: "" }} />
            </IconButton>

            <IconButton
              sx={{
                border: "2px solid #b2d9c6",
                borderRadius: 2,
                background: "#fff",

                p: 1
              }}
            >

              <IoMdShare style={{ color: "468F9D", fontSize: 26 }} />
            </IconButton>

            <Link to="/booking-checkout"> 
            <CustomButton text="Book Now"></CustomButton>
            </Link>

          </div>
        </div>

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
  )
}
