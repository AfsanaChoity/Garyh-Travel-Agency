import React from 'react'
import FilterSidebar from '../Pages/Explore/FilterSidebar/FilterSidebar'
import ListingPage from '../Pages/Explore/ListingPage/ListingPage'

export default function LandExplore() {
  return (
    <div className='px-4'>
         <div className='mt-10 flex flex-col lg:flex-row lg:gap-[8%] '>
                <div className='lg:w-[20%]'>
                    <FilterSidebar></FilterSidebar>
                </div>
               <div className='lg:w-[72%]'>
                 <ListingPage></ListingPage>
               </div>
            </div>
    </div>
  )
}
