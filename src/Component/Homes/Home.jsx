import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  return (
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
  );
};

export default Home;












