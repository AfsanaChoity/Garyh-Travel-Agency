import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#468F9D] overflow-x-hidden w-full mt-25">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-50 gap-x-42 text-center px-4 py-10">
                
                {/* Column 1 */}
                <div>
                  <h1 className="text-xl font-bold mb-2 text-white">About</h1>
                  <h2 className="text-lg font-semibold mb-2 text-white">Rareblocks</h2>
                  <p className="text-sm text-white max-w-xs mx-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sodales in volutpat ullamcorper fermentum.
                  </p>
                  <div className="flex justify-center gap-4 text-white text-lg">
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn/></a>
                  </div>
                </div>
        
                {/* Column 2 */}
                <div>
                  <h1 className="text-xl font-bold mb-3 text-white">Company</h1>
                  <ul className="space-y-2 text-sm text-white">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
        
                {/* Column 3 */}
                <div>
                  <h1 className="text-xl font-bold mb-3 text-white">Resources</h1>
                  <ul className="space-y-2 text-sm text-white">
                    <li>Documentation</li>
                    <li>Support</li>
                    <li>API Reference</li>
                    <li>Community</li>
                  </ul>
                </div>
        
                {/* Column 4 */}
                <div>
                  <h1 className="text-xl font-bold mb-3 text-white">Legal</h1>
                  <ul className="space-y-2 text-sm text-white">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                    <li>Security</li>
                  </ul>
                </div>
              </div>
            </footer>
    );
};

export default Footer;