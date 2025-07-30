import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
// import imag from "../../assets/background1.jpg"
// import imag from "../assets/background1.jpg"


import pic4 from "../assets/pic4.jpg"
import { Link } from 'react-router-dom';
import Banner from '../Component/Banner/Banner';
import background from '../assets/background1.jpg';
import CustomButton from '../Component/Shared/CustomButton';
import WhyHostSection from '../LandOwnerComponents/SingleComponents/WhyHostSection';
import WorkFlexBox from '../Pages/HowItWork/WorkFlexBox/WorkFlexBox';

import truck from '../assets/images/Truck.png'
import list from '../assets/LandOwnerImages/List.png';
import user from '../assets/LandOwnerImages/User.png';
import earn from '../assets/LandOwnerImages/Earn.png';
import CustomerReview from '../LandOwnerComponents/SingleComponents/CustomerReview';

import CampingCard from '../LandOwnerComponents/SingleComponents/ListOfGallery/CampingCard';
const LandingPage = () => {
  return (
    <div>
      {/* banner */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-8  mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Got Land? Turn It Into a Stay.
          </h1>
          <p className=" md:text-xl mb-6">
            Host RV travelers on your terms. No hookups? No problem. If you’ve got space, you’ve got potential.
          </p>

          <div className='w-2xs mt-20'>
            <CustomButton text="List Your Spot Now" />
          </div>

        </div>
      </div>


      {/* Why Host Section */}
      <div>
        <WhyHostSection></WhyHostSection>
      </div>

      {/* How it Works component */}

      <div className='text-center mt-10 mb-20'>
        <h2 className='text-2xl font-semibold lg:text-4xl '>How It Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10  px-4 '>
          <WorkFlexBox icon={list} heading={"List Your Spot"} subheading={"Upload details of your backyard or open land where an RV can park"}></WorkFlexBox>
          <WorkFlexBox icon={user} heading={"Get booking request"} subheading={"RVs send stay request for your review"}></WorkFlexBox>
          <WorkFlexBox icon={truck} heading={"Accept & Host"} subheading={"Trevelers arrive and stay on your property"}></WorkFlexBox>
          <WorkFlexBox icon={earn} heading={"Earn Money"} subheading={"Withdraw earnings anytime directly to your bank account"}></WorkFlexBox>
        </div>

      </div>

        {/* Gallery */}
        <div className='text-center mt-10 mb-20 px-4'>
          <h2 className='text-2xl font-semibold lg:text-4xl mb-16'>Gallery of Example Listings</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <CampingCard></CampingCard>
            <CampingCard></CampingCard>
            <CampingCard></CampingCard>
            <CampingCard></CampingCard>
          </div>

        </div>


      {/* Customer Review */}
      <div>
        <CustomerReview></CustomerReview>
      </div>


      <div
        className="container mx-auto px-4 h-[700px] bg-cover bg-center flex items-end justify-start mb-20 "
        style={{
          backgroundImage: `url(${pic4})`,
        }}
      >
        {/* Styled Button */}
        <div
          className=" bg-[#468F9D] flex flex-col items-start justify-center gap-[10px] text-white text-lg font-semibold w-[513px]  rounded-3xl p-10 mb-10 "

        >
          <span className='text-left text-xl'>Grow Your campground or glamping business</span>
          <span className="text-sm text-left">Host our community of good- natured <br />
            RVers and campers at your property. <br />
            Campground, or RV resort.F</span>

          {/* Small Button Inside */}
          <button className='Button text-xs md:text-[16px]'>
            Start Hosting
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;













