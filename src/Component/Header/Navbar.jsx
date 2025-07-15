import React from 'react';
import "./Navbar.css"
import logo from "../../assets/icon1.png"
// import secondlogo from "../../assets/icon2.jpg"
import background from "../../assets/background1.jpg"

const Navbar = () => {
    return (
       <nav>
                 <div  className="navi">
                   <div>
                       <img src={logo} alt="Logo" className="h-15 w-20" />
                   </div>
                   <div>
                       <ul>
                           <li>Home</li>
                           <li>Explore</li>
                           <li>How its work</li>
                           <li>Testimonials</li>
                           <li>Log In</li>
                       </ul>
                   </div>
                   <div>
                       <button className="Button">Sign Up</button>
                   </div>
                 </div>
                 <div className="h-screen bg-cover bg-center flex items-center justify-center text-white"
               style={{
                 backgroundImage: `url(${background})`,
               
               }}
                 >
                 <div className="ml-10 mt-50 bg-opacity-50 p-8 rounded-xl">
                  <h1 className="text-8xl font-bold mb-4">Park Safely.Sleep Peacefully</h1>
                  <p className="text-4xl mb-6">Find secure off-grid stays anywhere</p>
               </div>
                 </div>
               </nav>
    );
};

export default Navbar;