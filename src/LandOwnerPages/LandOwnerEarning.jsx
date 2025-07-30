import React from 'react'
import SharedHeading from '../Component/Shared/SharedHeading'
import DashboardFlexBox from '../Component/Shared/DashboardFlexBox'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import EarningTable from '../LandOwnerComponents/SingleComponents/EarningTable';


export default function LandOwnerEarning() {
    return (
        <div>
            <div className='mb-10'>
                <SharedHeading text="My Earnings"></SharedHeading>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <DashboardFlexBox heading="$1280" subHeading="Total Earning" icon={<FaHandHoldingDollar />} color="#E7F0FA"></DashboardFlexBox>
                <DashboardFlexBox heading="$310 " subHeading="This Month" icon={<FaCalendarAlt />} color="#FFF6E6"></DashboardFlexBox>
                <DashboardFlexBox heading="28" subHeading="Total Booking" icon={<BsBookmarkCheckFill />} color="#E6E6E6"></DashboardFlexBox>
            </div>

            <div className='mt-20'>
                <EarningTable></EarningTable>
            </div>
        </div>
    )
}
