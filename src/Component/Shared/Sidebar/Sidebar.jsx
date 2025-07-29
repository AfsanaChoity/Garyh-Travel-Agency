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
import './sidebar.css';
import { GoStack } from 'react-icons/go';
import { CiSettings } from 'react-icons/ci';
import { useAuth } from '../../../Hooks/UseAuth';





export default function Sidebar() {
    const location = useLocation();
    const { user, logout } = useAuth();

    const items = [
    { key: '/dashboard', icon: <GoStack style={{ fontSize: '24px' }} />, label: <Link to="/dashboard">Dashboard</Link> },
    { key: '/dashboard/my-booking', icon: <IoBriefcaseOutline size={24} />, label: <Link to="/dashboard/my-booking">My booking</Link> },
    { key: '/dashboard/saved-spot', icon: <IoBookmarkOutline size={24} />, label: <Link to="/dashboard/saved-spot">Saved Spot</Link> },
    {
        key: '/dashboard/profile-setting',
        icon: <CiSettings size={24} />,
        label: (
            <Link
                to="/dashboard/profile-setting"
                onClick={() => {
                    localStorage.removeItem("profileTab"); // 🧹 clear saved tab
                    sessionStorage.removeItem("profileFirstOpen"); // optional: reset session flag too
                }}
            >
                Profile Setting
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
                    window.location.href = "/login"; // redirect manually after logout
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
