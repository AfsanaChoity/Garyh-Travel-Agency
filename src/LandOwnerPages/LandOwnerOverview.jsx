import React from 'react'
import SharedHeading from '../Component/Shared/SharedHeading'
import SharedText from '../Component/Shared/SharedText'
import DashboardFlexBox from '../Component/Shared/DashboardFlexBox'
import { FaSackDollar } from 'react-icons/fa6'
import { CiCircleList, CiSettings } from 'react-icons/ci'
import OverviewTable from '../LandOwnerComponents/SingleComponents/OverviewTable'

export default function LandOwnerOverview() {
  return (
    <div>
         <div>
                <SharedHeading text="Hello, Nadim"></SharedHeading>
              </div>
              
              <div className='my-6'>
                <SharedText text="Here’s a quick look at your RVnBO hosting activity"></SharedText>
              </div>


              {/* box */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <DashboardFlexBox heading="12" subHeading="Total Listing" icon={<CiCircleList />} color="#E7F0FA"></DashboardFlexBox>
                <DashboardFlexBox heading="03" subHeading="Pending Request " icon={<CiSettings />} color="#FFF6E6"></DashboardFlexBox>
                <DashboardFlexBox heading="03" subHeading="Total Earning " icon={<FaSackDollar />} color="#E6E6E6"></DashboardFlexBox>
              </div>

              {/* Table */}
              <div className='mt-20'>
                <OverviewTable></OverviewTable>
              </div>
    </div>
  )
}
