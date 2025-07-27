import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icon1.png';

import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '@mui/material/Button';
import { useAuth } from '../../Hooks/UseAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <nav className="">
      {/* Navbar top section */}
      <div className="container mx-auto bg-[#468F9D] flex justify-between items-center px-4  py-4">
        {/* Logo with mobile toggle */}
        <div onClick={toggleMenu} className="cursor-pointer">
          <img src={logo} alt="Logo" className="md:h-15 h-12 w-auto" />
        </div>



        <div className=' flex  items-center'>
          {/* Desktop Menu */}
          <div>

            <ul className="hidden md:flex  items-center font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li> <Link to="/about">About Us</Link></li>
              {!user && <li><Link to="/login">Log In</Link></li>}

              {/* avatar */}
              {user && (
                <>
                  <li><Link to="/inbox">Inbox</Link></li>
                  <li className="">
                    <div className="flex items-center gap-2">
                      <Link to="/dashboard"><img src={user.avatar} className="w-8 h-8 md:w-12 md:h-12 rounded-full" /></Link>
                      <p className="text-white">{user.name}</p>
                    </div>
                    {/* <button onClick={logout} className="text-white underline">Logout</button> */}
                  </li>
                </>

                
              )}
            </ul>
          </div>

          {/* Sign Up button */}
          {!user && (
            <div className="hidden md:block">
              <Link to="/sign-up" className="Button px-4 py-2 rounded-lg transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>




      </div>


      {/* Mobile Menu - Slide from left */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0  w-64 bg-[#468F9D] shadow-lg z-20 w-full p-6 transition-transform duration-300">
          <button onClick={toggleMenu} className="mb-6 text-white">
            <HiX className="w-6 h-6" />
          </button>
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/explore" onClick={toggleMenu}>Explore</Link></li>
            <li><Link to="/how-it-works" onClick={toggleMenu}>How it works</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            {!user && <li><Link to="/login" onClick={toggleMenu}>Log In</Link></li>}
            {/* {user && <li><Link to="/inbox" onClick={toggleMenu}>Inbox</Link></li>} */}
            {/* {user && <li><button onClick={logout}>Log Out</button></li>} */}
            {!user && (
              <li>
                <Link
                  to="/sign-up"
                  className=""
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}



    </nav>
  );
};

export default Navbar;
