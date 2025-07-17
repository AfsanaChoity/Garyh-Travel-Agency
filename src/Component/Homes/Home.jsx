import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import imag from "../../assets/background1.jpg"
import "./Home.css"
import pic1 from "../../assets/pic1.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic4 from "../../assets/pic4.jpg"

const Home = () => {
  return (
    <div>
      <Box className="mx-20 -mt-42 relative z-10">
        <Box
          className="p-10  rounded-xl bg-white shadow-md"
          component="form"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
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
            sx={{ width: '48ch', m: 1 }}
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
            sx={{ width: '25ch', m: 1 }}
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
            sx={{ width: '25ch', m: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaCalendarAlt style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ m: 2 }}>
            <button className="border border-gray-300 rounded-xl text-black px-4 py-2  font-bold">
              2 Night
            </button>
          </Box>

          <TextField
            required
            id="guests"
            label="Rooms & Guests"
            defaultValue="1 room, 2 guests"
            InputLabelProps={{ shrink: true, required: false }}
            sx={{ width: '25ch', m: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser style={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ width: '100%', mt: 4 }}>
            <button
              className="text-white py-3 rounded w-full"
              style={{ backgroundColor: '#468F9D' }}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Box>
      <div>
        <div className="w-full pl-30 pr-30 mt-20 mb-10">
          <div className="flex w-full gap-6">
            {/* Left Section */}
            <div className="flex flex-col w-1/2 gap-6">
              {/* Image + Text Block Combined */}
              <div className="flex flex-col rounded-sm overflow-hidden border border-gray-200">
                {/* Image Grid Block - no padding */}
                <div className="h-80 w-full flex gap-2 bg-white">
                  {/* Left 2 images - 25% width, full height, no padding */}
                  <div className="flex flex-col gap-3 w-1/4 h-full">
                    <img src={pic3} alt="Left 1" className="w-full h-1/2 object-cover" />
                    <img src={pic2} alt="Left 2" className="w-full h-1/2 object-cover" />
                  </div>
                  {/* Center image - 50% width, full height */}
                  <img src={pic1} alt="Center" className="w-1/2 h-full object-cover" />
                  {/* Right 2 images - 25% width, full height, no padding */}
                  <div className="flex flex-col gap-3 w-1/4 h-full">
                    <img src={pic3} alt="Right 1" className="w-full h-1/2 object-cover " />
                    <img src={pic2} alt="Right 2" className="w-full h-1/2 object-cover" />
                  </div>
                </div>
                {/* Text + Button */}
                <div className="bg-gray-100 px-6 py-6 flex flex-col justify-between h-48 rounded-b-lg" style={{ backgroundColor: '#468F9D' }}>
                  <div>
                    <h2 className="text-md font-semibold mb-2 text-white">Only On Travelel</h2>
                    <p className="text-white font-2xl">Explore 120,000+ campsites you won’t find <br /> anywhere else</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-col w-1/2 gap-6">
              {/* Image + Text Block Combined */}
              <div className="flex flex-col rounded-sm overflow-hidden border border-gray-200">
                {/* Single Image */}
                <img src={imag} alt="Featured" className="h-80 w-full object-cover rounded-t-lg" />

                {/* Text + Button */}
                <div className="bg-gray-100 px-6 py-6 flex flex-col justify-between h-48 rounded-b-lg" style={{ backgroundColor: '#468F9D' }}>
                  <div>
                    <h2 className="text-md font-semibold mb-2 text-white">Fourth of July</h2>
                    <p className="text-white font-2xl">Snag a last minute fourth of july campsite</p>  
                  </div>
                  <button className=" text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mr-30 ml-30 h-[700px] bg-cover bg-center flex items-end justify-start pl-[54px] pb-[25px]"
        style={{
          backgroundImage: `url(${pic4})`,
        }}
      >
        {/* Styled Button */}
        <button
          className="flex flex-col items-start justify-center gap-[10px] text-white text-lg font-semibold"
          style={{
            width: '513px',
            height: '334px',
            padding: '25px 54px',
            borderRadius: '54px',
            backgroundColor: '#468F9D',
          }}
        >
          <span className='text-left text-xl'>Grow Your campground or <br /> glamping business</span>
          <span className="text-sm text-left">Host our community of good- natured <br />
            RVers and campers at your property. <br />
            Campground, or RV resort.F</span>

          {/* Small Button Inside */}
          <button className='Button'>
            Start Hosting
          </button>
        </button>
      </div>
    </div>
  );
};

export default Home;












