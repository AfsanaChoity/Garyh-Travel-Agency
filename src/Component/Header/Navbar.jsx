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
  console.log(user);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="">
      {/* Navbar top section */}
      <div className="container mx-auto bg-[#468F9D] flex items-center justify-between lg:px-8 px-4  py-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="md:h-15 h-12 w-auto" />
        </div>


        <div className='flex lg:gap-20  items-center'>
          {/* Desktop Menu */}
          <div>

            <ul className="hidden md:flex gap-2 items-center font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li> <Link to="/about">About Us</Link></li>
              {!user && <li><Link to="/login">Log In</Link></li>}
              {user && (
                <>
                  <li><Link to="/inbox">Inbox</Link></li>
                  <li className="">
                    <div className="flex items-center gap-2">
                      <img src={user.avatar} className="w-8 h-8 md:w-12 md:h-12 rounded-full" />
                      <p className="text-white">{user.name}</p>
                    </div>
                    <button onClick={logout} className="text-white underline">Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Sign Up button */}
          {!user && (
            <div className="hidden md:block">
              <Link to="/sign-up" className="Button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        {user && (
          <div className="md:hidden">
            <Button onClick={toggleMenu}>
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <img src={user.avatar} className="w-8 h-8 rounded-full" />
              )}
            </Button>

          </div>
        )}

        {!user && (
          <div className="md:hidden">
            <Button onClick={toggleMenu}>
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-white" />
              )}
            </Button>
          </div>
        )}


      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-[#468F9D] shadow-lg absolute w-full z-20">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/explore" onClick={toggleMenu}>Explore</Link></li>
          <li><Link to="/how-it-works" onClick={toggleMenu}>How it works</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          {!user && <li><Link to="/login">Log In</Link></li>}
          {user && <li><Link to="/login">Inbox</Link></li>}
          {user && <li><Link to="/login">Log Out</Link></li>}

          {!user && (
            <>
              <li>
                <Link to="/sign-up" className="Button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}


    </nav>
  );
};

export default Navbar;
