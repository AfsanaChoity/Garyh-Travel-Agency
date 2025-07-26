import React from 'react';
import HotelBookingForm from '../../Component/Shared/HotelBookingForm/HotelBookingForm';
import FilterSidebar from './FilterSidebar/FilterSidebar';
import ListingPage from './ListingPage/ListingPage';

const Explore = () => {
    return (
        <div className='container px-4  lg:mx-auto mt-8 '>
            <HotelBookingForm></HotelBookingForm>
            <div className='mt-10 flex flex-col lg:flex-row lg:gap-[8%] '>
                <div className='lg:w-[20%]'>
                    <FilterSidebar></FilterSidebar>
                </div>
               <div className='lg:w-[72%]'>
                 <ListingPage></ListingPage>
               </div>
            </div>

        </div>
            
        
    );
};

export default Explore;