import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#468F9D]  w-full mt-25 pt-10 pb-6">
              <div className="mx-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
                
                {/* Column 1 */}
                <div className=' flex flex-col items-center lg:items-start'>
                  <h1 className="text-xl font-bold  text-white mb-2">About</h1>
                  <h2 className="text-lg font-semibold text-white mb-2">Rareblocks</h2>
                  <p className="text-sm text-white mb-2 text-center lg:text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sodales in volutpat ullamcorper fermentum.
                  </p>
                  <div className="flex  gap-4 text-white text-lg mt-auto  ">
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn/></a>
                  </div>
                </div>
        
                {/* Column 2 */}
                <div className=''>
                  <h1 className="text-xl font-bold text-white flex justify-center mb-4">Company</h1>
                  <div className=" flex flex-col space-y-4 text-white text-center text-sm">
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                    
                  </div>
                </div>

                 {/* Column 3 */}
                <div className=''>
                  <h1 className="text-xl font-bold text-white flex justify-center mb-4">Help</h1>
                  <div className=" flex flex-col space-y-4 text-white text-center text-sm">
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                   
                  </div>
                </div>
        
                {/* Column 4 */}
                <div className=' '>
                  <h1 className="text-xl font-bold text-white flex justify-center mb-4">Resources</h1>
                  <div className="flex flex-col space-y-4 text-white text-center text-sm ">
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                  </div>
                </div>
        
               
              </div>
            </footer>
    );
};

export default Footer;


