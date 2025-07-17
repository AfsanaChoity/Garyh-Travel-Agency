import React from 'react';
// import { ImLocation2 } from "react-icons/im";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoShareSocial } from "react-icons/io5";
// import logo from "../../assets/icon1.jpg";
// import secondlogo from "../../assets/icon2.jpg";


const Creek = () => {
    return (
        <section>
            <section>
                <nav>
                    <div className="navi">
                        <div>
                            {/* <img src={logo} alt="Logo" className="h-18 w-18" /> */}
                        </div>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Explore</li>
                                <li>How its work</li>
                                <li>About</li>
                                <li>Inbox</li>
                            </ul>
                        </div>
                        <div>
                            {/* <img src={secondlogo} alt="Logo" className="h-12 w-12 rounded-full" /> */}
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <div className="flex justify-between items-start px-6 mt-6 flex-col md:flex-row gap-8">

                    {/* Left Section */}
                    <div className='md:ml-4 mt-2'>
                        <h2 className='font-bold text-2xl'>Pine Creek Retreat</h2>

                        <div className='mt-4'>
                            <h2 className="flex items-center text-gray-700 text-lg">
                                {/* <ImLocation2 className="mr-2 text-black text-2xl" /> */}
                                Pine Creek Retreat – Asheville, NC
                            </h2>

                            <div className="flex items-center gap-3 mt-4">
                                <button className="bg-white text-black px-3 py-1 rounded-md text-sm border border-gray-600">
                                    4.2
                                </button>
                                <h2 className="text-gray-700 text-sm">
                                    <span className='font-bold'>Very Good</span> 371 reviews
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-start mt-2 md:mt-0">
                        <p className="text-[#468F9D] text-3xl font-bold mb-4">
                            $ 2349/night
                        </p>

                        <div className="flex gap-3">
                            <button className="border border-gray-600 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 transition">
                                {/* <IoIosHeartEmpty /> */}
                            </button>
                            <button className="border border-gray-600 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 transition">
                                {/* <IoShareSocial /> */}
                            </button>
                            <button className="bg-[#468F9D] text-black px-4 py-2 rounded-md text-sm transition w-35">
                                Book Now
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default Creek;