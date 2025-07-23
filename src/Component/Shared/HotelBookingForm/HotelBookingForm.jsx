import React from 'react';
import dayjs from 'dayjs';
import {
  TextField,
  MenuItem,
  Box,
  Typography,
  InputAdornment,
  Grid,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FaCar, FaUser } from 'react-icons/fa';

const HotelBookingForm = () => {
  const [location, setLocation] = React.useState('Pune, Maharashtra');
  const [checkIn, setCheckIn] = React.useState(dayjs());
  const [checkOut, setCheckOut] = React.useState(dayjs());
  const [roomDetails, setRoomDetails] = React.useState('1 room, 2 guests');

  const nights = checkOut.diff(checkIn, 'day');

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            borderRadius: 2,
            margin: 'auto',
            backgroundColor: 'white',
            maxWidth: 1600,
          }}
        >
          <Grid
            container
            spacing={{xs: 2, md:0}}
            sx={{
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              flexWrap: 'wrap'
            }}
          >
            {/* Location */}
            <Grid item xs={12} md sx={{ flexBasis: { md: '20%' }, minWidth: 0 }}>
              <TextField
                fullWidth
                label="Enter City or Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaCar style={{ color: '#000' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Check In */}
            <Grid item xs={12} md sx={{ flexBasis: { md: '20%' }, minWidth: 0 }}>
              <DatePicker
                label="Check In"
                value={checkIn}
                onChange={setCheckIn}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>

            {/* Check Out */}
            <Grid item xs={12} md sx={{ flexBasis: { md: '20%' }, minWidth: 0 }}>
              <DatePicker
                label="Check Out"
                value={checkOut}
                onChange={setCheckOut}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>

            {/* Nights Display */}
            <Grid item xs={12} md sx={{ flexBasis: { md: '' }, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  border: '1.5px solid #aaa',
                  borderRadius: '28px',
                  px: 4,
                  py: 2,
                  width: '100%',
                  textAlign: 'center',
                  background: '#f5f5f5',
                }}
              >
                <Typography fontWeight={700}>
                  {nights > 0 ? `${nights} Night${nights > 1 ? 's' : ''}` : '0 Night'}
                </Typography>
              </Box>
            </Grid>

            {/* Rooms & Guests */}
            <Grid item xs={12} md sx={{ flexBasis: { md: '20%' }, minWidth: 0 }}>
              <TextField
                select
                fullWidth
                label="Rooms & Guests"
                value={roomDetails}
                onChange={(e) => setRoomDetails(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser style={{ color: '#000' }} />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="1 room, 2 guests" sx={{ color: 'black' }}>1 room, 2 guests</MenuItem>
                <MenuItem value="2 rooms, 4 guests" sx={{ color: 'black' }}>2 rooms, 4 guests</MenuItem>
                <MenuItem value="3 rooms, 6 guests" sx={{ color: 'black' }}>3 rooms, 6 guests</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>
      </LocalizationProvider>
    </div>
  );
};

export default HotelBookingForm;
