import { Link, useLocation } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
import { FiBox, FiLogOut } from "react-icons/fi";
import { MdOutlineStore, MdListAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AppstoreOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

import { MdOutlineDashboard } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import './sidebar.css';



const items = [
    { key: '/', icon: <MdOutlineDashboard style={{ fontSize: '24px' }} />, label: <Link to="/">Dashboard</Link> },
    { key: '/user-management', icon: <RiUserLine size={24} />, label: <Link to="/user-management">My booking</Link> },
    { key: '/order-management', icon: <MdListAlt size={24} />, label: <Link to="/order-management">Saved Spot</Link> },
    { key: '/category', icon: <MdOutlineCategory size={24} />, label: <Link to="/category">Profile Setting</Link> },
    
   

];

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className=' min-h-screen flex flex-col justify-between '>

            {/* Top Section */}
            <div >
                

                {/* Menu */}
                <Menu
                    className="custom-sidebar-menu poppins-medium "
                    selectedKeys={[location.pathname]}
                    // defaultOpenKeys={['sub1', 'sub2']}
                    mode="inline"
                    theme="light"

                    items={items}
                />

            </div>


            {/* Bottom Section */}
            <div className="mr-2 ">
                <Link to="/login">
                    <Button
                        className="logout-button poppins-medium "
                        type="text"
                        icon={<FiLogOut style={{ fontSize: '24px' }} />}

                    >
                        Log out
                    </Button>
                </Link>
            </div>


        </div>


    )
}
