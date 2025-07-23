import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icon1.png';

import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="">
      {/* Navbar top section */}
      <div className="bg-[#468F9D] flex items-center justify-between lg:px-8 px-4  py-4">
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
              <li>Log In</li>
            </ul>
          </div>

          {/* Sign Up button */}
          <div className="hidden md:block">
            <Link to="/sign-up" className="Button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>


      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-[#468F9D] shadow-lg absolute w-full z-20">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/explore" onClick={toggleMenu}>Explore</Link></li>
           <li><Link to="/how-it-works" onClick={toggleMenu}>How it works</Link></li>
          <li> <Link to="/about">About Us</Link></li>           
          <li>Log In</li>
          <li>
             <Link to="/sign-up" className="Button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </Link>
          </li>
        </ul>
      )}

     
    </nav>
  );
};

export default Navbar;
