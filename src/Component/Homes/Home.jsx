import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import imag from "../../assets/background1.jpg"

const Home = () => {
  return (
    <div>
        <Box className="mx-20 -mt-32 relative z-10">
      <Box
        className="p-10 border rounded-xl bg-white shadow-md"
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

        <Box sx={{ m: 1 }}>
          <button className="border border-gray-300 rounded-xl text-black px-4 py-2 mt-2 font-bold">
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
        <div className="flex flex-wrap gap-12 px-10 py-10 justify-center items-start">
  {/* Left Section */}
  <div className="flex flex-col gap-6 w-full md:w-1/2">
    {/* 5-Image Layout */}
    <div className="flex items-center justify-center gap-6">
      {/* Left 2 images */}
      <div className="flex flex-col gap-4">
        <img src={imag} alt="Left 1" className="w-24 h-24 object-cover rounded" />
        <img src={imag} alt="Left 2" className="w-24 h-24 object-cover rounded" />
      </div>

      {/* Center image */}
      <img src={imag} alt="Center" className="w-48 h-48 object-cover rounded-lg shadow" />

      {/* Right 2 images */}
      <div className="flex flex-col gap-4">
        <img src={imag} alt="Right 1" className="w-24 h-24 object-cover rounded" />
        <img src={imag} alt="Right 2" className="w-24 h-24 object-cover rounded" />
      </div>
    </div>

    {/* Text + Button */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Gallery Section</h2>
        <p className="text-gray-600">Browse beautiful spots and destinations.</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Explore</button>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-6 w-full md:w-1/2">
    {/* Single Image */}
    <img src={imag} alt="Featured" className="w-full h-64 object-cover rounded-lg shadow" />

    {/* Text + Button */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Featured Location</h2>
        <p className="text-gray-600">Discover our handpicked destination just for you.</p>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Learn More</button>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Home;












