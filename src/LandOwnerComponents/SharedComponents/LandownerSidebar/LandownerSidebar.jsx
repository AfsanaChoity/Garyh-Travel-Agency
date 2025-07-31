import { Link, useLocation } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
import { FiBox, FiLogOut } from "react-icons/fi";
import { MdOutlineStore, MdListAlt } from "react-icons/md";
import { IoBookmarkOutline, IoBriefcaseOutline, IoSettingsOutline } from "react-icons/io5";
import { AppstoreOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

import { MdOutlineDashboard } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";

import '../../../Component/Shared/Sidebar/sidebar.css'
import { GoStack } from 'react-icons/go';
import { CiSettings } from 'react-icons/ci';
import { useAuth } from '../../../Hooks/UseAuth';
import { FaHandHoldingDollar, FaListUl, FaRegCalendarDays, FaSackDollar } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa';




export default function LandownerSidebar() {
    const location = useLocation();
    const { user, logout } = useAuth();

    const items = [
    { key: '/overview', icon: <GoStack style={{ fontSize: '24px' }} />, label: <Link to="/overview">Overview</Link> },
    { key: '/overview/my-listing', icon: <FaListUl size={24} />, label: <Link to="/overview/my-listing">My Listing</Link> },
    { key: '/overview/manage-booking', icon: <FaRegCalendarDays size={24} />, label: <Link to="/overview/manage-booking">Requests</Link> },
    { key: '/overview/reviews', icon: <FaStar size={24} />, label: <Link to="/overview/reviews">Reviews</Link> },
    { key: '/overview/earnings', icon: <FaSackDollar size={24} />, label: <Link to="/overview/earnings">Earnings</Link> },
    {
        key: '/overview/settings',
        icon: <CiSettings size={24} />,
        label: (
            <Link
                to="/overview/settings"
                onClick={() => {
                    localStorage.removeItem("profileTab"); // 🧹 clear saved tab
                    sessionStorage.removeItem("profileFirstOpen"); // optional: reset session flag too
                }}
            >
                Settings
            </Link>
        ),
    },
    {
        key: '/logout',
        icon: <FiLogOut size={24} />,
        label: (
            <span
                onClick={() => {
                    logout();
                    window.location.href = "/"; // redirect manually after logout
                }}
            >
                Log out
            </span>
        ),
    },


];

    return (
        <div className=' flex flex-col justify-between '>

            {/* Top Section */}

            <div >


                {/* Menu */}
                <Menu
                    className="custom-sidebar-menu poppins-medium "
                    selectedKeys={[location.pathname]}
                    defaultOpenKeys={['sub1', 'sub2']}
                    mode="inline"
                    theme="light"

                    items={items}
                />

                {/* Bottom Section
                <div className="mr-2 ">
                    <Link to="/login">
                        <Button
                            onClick={() => { logout() }}
                            className="logout-button poppins-medium"
                            type="text"
                            icon={<FiLogOut style={{ fontSize: '24px' }} />}

                        >
                            Log out
                        </Button>
                    </Link>
                </div> */}
            </div>





        </div>


    )
}
