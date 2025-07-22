import React from 'react'
import WorkPageBanner from './WorkPageBanner/WorkPageBanner'
import backgroundImg from '../../assets/Start_exploring_img.jpg'
import WorkFlexBox from './WorkFlexBox/WorkFlexBox'
import search from '../../assets/images/search.png'
import truck from '../../assets/images/Truck.png'
import moon from '../../assets/images/moon.png'
import backgroundImg2 from '../../assets/images/RV_spot_img.jpg'
export default function HowItWork() {
  return (
    <div>

      {/* Banner */}
      <WorkPageBanner backgroundImg={backgroundImg} heading={"How Does RVnBO Work?"} subheading={"Explore off-grid spots. Park with confidence. Sleep peacefully."} buttonText={"Start Exploring"}></WorkPageBanner>

      {/* How it Works component */}

      <div className='text-center my-10 lg:my-20'>
        <h2 className='text-2xl font-semibold lg:text-4xl '>How It Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:px-20 px-4 '>
          <WorkFlexBox icon={search} heading={"Search Frusted land"} subheading={"Locate Verified, off-gird stays"}></WorkFlexBox>
          <WorkFlexBox icon={truck} heading={"Park your RV Safely"} subheading={"Reserve Your Spot and travel"}></WorkFlexBox>
          <WorkFlexBox icon={moon} heading={"Sleep under the stars"} subheading={"Retax in a secure environment"}></WorkFlexBox>
        </div>

      </div>

      {/* Find RV spot now section */}
      <div>
        <WorkPageBanner 
        backgroundImg={backgroundImg2} 
        heading={"Your next adventure is one click away"} 
        subheading={""}
        buttonText={"Find RV Spot Now"}>
        containerClassName={"mx-10"}
        </WorkPageBanner>
      </div>

    </div>
  )
}
