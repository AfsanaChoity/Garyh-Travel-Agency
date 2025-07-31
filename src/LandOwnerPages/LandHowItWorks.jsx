import React from 'react'
import WorkPageBanner from '../Pages/HowItWork/WorkPageBanner/WorkPageBanner'
// import backgroundImg from '../../assets/Start_exploring_img.jpg'
import backgroundImg from '../assets/Start_exploring_img.jpg'
import truck from '../assets/images/Truck.png'
import list from '../assets/LandOwnerImages/List.png';
import user from '../assets/LandOwnerImages/User.png';
import earn from '../assets/LandOwnerImages/Earn.png';
import backgroundImg2 from '../assets/ChangedImages/img1.jpg'
import WorkFlexBox from '../Pages/HowItWork/WorkFlexBox/WorkFlexBox';
import FAQs from '../Pages/HowItWork/FAQs/FAQs';

export default function LandHowItWorks() {
    return (
        <div>
            {/* Banner */}
            <div>
                <WorkPageBanner backgroundImg={backgroundImg} heading={"How Does RVnBO Work?"} subheading={"Explore off-grid spots. Park with confidence. Sleep peacefully."} buttonText={"Start Exploring"}></WorkPageBanner>
            </div>

            {/* How it Works component */}

            <div className='text-center mt-20 mb-20'>
                <h2 className='text-2xl font-semibold lg:text-4xl '>How It Works</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10  px-4 '>
                    <WorkFlexBox icon={list} heading={"List Your Spot"} subheading={"Upload details of your backyard or open land where an RV can park"}></WorkFlexBox>
                    <WorkFlexBox icon={user} heading={"Get booking request"} subheading={"RVs send stay request for your review"}></WorkFlexBox>
                    <WorkFlexBox icon={truck} heading={"Accept & Host"} subheading={"Trevelers arrive and stay on your property"}></WorkFlexBox>
                    <WorkFlexBox icon={earn} heading={"Earn Money"} subheading={"Withdraw earnings anytime directly to your bank account"}></WorkFlexBox>
                </div>
            </div>

             {/* FAQs */}
                 <div className='text-center my-10 lg:my-20'>
                   <h2 className='text-2xl font-semibold lg:text-4xl '>Frequently Asked Questions</h2>
                   <div className='mx-4 lg:mx-20'>
                     <FAQs></FAQs>
                   </div>
                 </div>


                 {/* Find RV spot now section */}
                       <div >
                         <WorkPageBanner
                           backgroundImg={backgroundImg2}
                           heading={"Your next adventure is one click away"}
                           subheading={""}
                           buttonText={"Find RV Spot Now"}
                           containerClassName=""
                           >
                           
                         </WorkPageBanner>
                       </div>
                 

        </div>
    )
}
