import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import imag from "../../assets/background1.jpg"
import "./Home.css"
import pic1 from "../../assets/pic1.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic4 from "../../assets/pic4.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Box className="md:mx-20 mx-10 -mt-42 relative z-10">
        <Box
          className="md:px-10 px-2 rounded-xl bg-white shadow-md text-center"
          component="form"
          sx={{
            display:{
              sm: 'block',
              md: 'flex',
              lg: 'flex',
            },
            flexWrap: 'wrap',
            
            justifyContent: 'space-around',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="location"
            label="Enter City or Location"
            defaultValue="Pune, Maharashtra"
            InputLabelProps={{ shrink: true, required: false }}
            sx={{  mb:4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaCar style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="check-in"
            label="Check In"
            defaultValue="Fri 12/2"
            InputLabelProps={{ shrink: true, required: false }}
            sx={{   mb:4 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaCalendarAlt style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="check-out"
            label="Check Out"
            defaultValue="Sun 12/4"
            InputLabelProps={{ shrink: true, required: false }}
            sx={{   mb:4  }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaCalendarAlt style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ mb: 4 }}>
            <button className="border-2 border-gray-500  text-black px-8 py-3  font-bold rounded-full">
              2 Night
            </button>
          </Box>

          <TextField
            required
            id="guests"
            label="Rooms & Guests"
            defaultValue="1 room, 2 guests"
            InputLabelProps={{ shrink: true, required: false }}
            sx={{    mb:4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ width: '100%',  pb:4 , mt:2}}>
            <button
              className="text-white py-3 rounded w-full"
              style={{ backgroundColor: '#468F9D' }}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Box>
      
      <div className=''>
        <div className=" md:px-20 px-4 mt-20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex flex-col h-full ">
              {/* Image + Text Block Combined */}
              <div className="flex flex-col rounded-sm overflow-hidden h-full">
                 {/* Image Grid Block - no padding */}
                <div className=" flex h-70 lg:h-100">
                  {/* Left 2 images - 25% width, full height, no padding */}
                  <div className="flex flex-col justify-between w-1/4 gap-2">
                    <img src={pic3} alt="Left 1" className="w-full h-1/2 object-cover" />
                    <img src={pic2} alt="Left 2" className="w-full h-1/2 object-cover" />
                  </div>
                  {/* Center image - 50% width, full height */}
                <div className="w-1/2 px-2">
                   <img src={pic1} alt="Center" className="w-full h-full object-cover" />
                </div>
                  {/* Right 2 images - 25% width, full height, no padding */}
                  <div className="flex flex-col gap-2 justify-between w-1/4">
                      <img src={pic3} alt="Right 1" className="w-full h-1/2 object-cover" />
                      <img src={pic2} alt="Right 2" className="w-full h-1/2 object-cover" />
                  </div>
                </div> 
                {/* Text + Button */}
                <div className=" px-6 py-6 flex flex-col justify-between  rounded-b-lg h-40" style={{ backgroundColor: '#468F9D' }}>
                  <div>
                    <h2 className="text-md font-semibold mb-2 text-white">Only On Travelel</h2>
                    <p className="text-white font-2xl">Explore 120,000+ campsites you won’t find anywhere else </p>
                  </div>
                  <Link to="/booking" className=" text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</Link>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className=" ">
              {/* Image + Text Block Combined */}
              <div className=" rounded-sm overflow-hidden">
                {/* Single Image */}
                <div className=' h-70 lg:h-100'>
                  <img src={imag} alt="Featured" className=" w-full h-full object-cover rounded-t-lg" />
                </div>

                {/* Text + Button */}
                <div className="bg-[#468F9D] px-6 py-6 flex flex-col justify-between  rounded-b-lg h-40" >
                  <div>
                    <h2 className="text-md font-semibold mb-2 text-white">Fourth of July</h2>
                    <p className="text-white font-2xl">Snag a last minute fourth of july campsite</p>  
                  </div>
                  <Link to="/booking" className=" text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="md:mx-20 mx-4 px-4 h-[700px] bg-cover bg-center flex items-end justify-start pl-[54px] pb-[25px] "
        style={{
          backgroundImage: `url(${pic4})`,
        }}
      >
        {/* Styled Button */}
        <div
          className="bg-[#468F9D] flex flex-col items-start justify-center gap-[10px] text-white text-lg font-semibold w-[513px]  rounded-3xl p-10 "
  
        >
          <span className='text-left text-xl'>Grow Your campground or glamping business</span>
          <span className="text-sm text-left">Host our community of good- natured <br />
            RVers and campers at your property. <br />
            Campground, or RV resort.F</span>

          {/* Small Button Inside */}
          <button className='Button text-xs md:text-[16px]'>
            Start Hosting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from 'react';

// function App() {
//   const [page, setPage] = useState('login');

//   // Handlers to navigate between pages
//   const goToForgotPassword = () => setPage('forgotPassword');
//   const goToCheckEmail = () => setPage('checkEmail');
//   const goToResetPassword = () => setPage('resetPassword');
//   const goToConfirmation = () => setPage('confirmation');
//   const goToHome = () => setPage('home');

//   // State for form inputs
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
//       {page === 'login' && (
//         <div style={{ backgroundImage: 'url(https://via.placeholder.com/800x600)', padding: '50px', backgroundSize: 'cover' }}>
//           <h2>Login Page</h2>
//           <form>
//             <div>
//               <label>Email or Username:</label><br />
//               <input type="text" placeholder="Enter email or username" />
//             </div>
//             <div>
//               <label>Password:</label><br />
//               <input type="password" placeholder="Enter password" />
//             </div>
//             <button type="button">Login</button>
//           </form>
//           <p style={{ marginTop: '20px' }}>
//             <a href="#" onClick={(e) => { e.preventDefault(); goToForgotPassword(); }}>Forget your password?</a>
//           </p>
//         </div>
//       )}

//       {page === 'forgotPassword' && (
//         <div style={{ backgroundImage: 'url(https://via.placeholder.com/800x600)', padding: '50px', backgroundSize: 'cover' }}>
//           <h2>Reset Password</h2>
//           <p>Enter your email to reset your password</p>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br /><br />
//           <button onClick={() => { goToCheckEmail(); }}>Reset Password</button>
//         </div>
//       )}

//       {page === 'checkEmail' && (
//         <div style={{ backgroundImage: 'url(https://via.placeholder.com/800x600)', padding: '50px', backgroundSize: 'cover' }}>
//           <h2>Check Your Email</h2>
//           <p>Check your email for password reset link.</p>
//           <button onClick={() => { goToResetPassword(); }}>Open Email</button>
//         </div>
//       )}

//       {page === 'resetPassword' && (
//         <div style={{ backgroundImage: 'url(https://via.placeholder.com/800x600)', padding: '50px', backgroundSize: 'cover' }}>
//           <h2>Set New Password</h2>
//           <form onSubmit={(e) => { e.preventDefault(); goToConfirmation(); }}>
//             <div>
//               <label>New Password:</label><br />
//               <input
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}

//               />
//             </div>
//             <div>
//               <label>Confirm Password:</label><br />
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
  
//               />
//             </div>
//             <br />
//             <button type="submit">Reset Pass</button>
//           </form>
//         </div>
//       )}

//       {page === 'confirmation' && (
//         <div style={{ backgroundImage: 'url(https://via.placeholder.com/800x600)', padding: '50px', backgroundSize: 'cover' }}>
//           <h2>Your password has been reset successfully</h2>
//           <button onClick={() => { goToHome(); }}>Continue</button>
//         </div>
//       )}

//       {page === 'home' && (
//         <div style={{ padding: '50px' }}>
//           <h2>Home Page</h2>
//           <p>Welcome to the website!</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;












