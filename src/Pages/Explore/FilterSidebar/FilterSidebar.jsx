import React from 'react';
import {
  Box,
  Typography,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const amenitiesList = [
  'Water',
  'Electric',
  'Sewage Hookups',
  'Firepit',
];

const FilterSidebar = () => {
  const [price, setPrice] = React.useState([500, 20000]);
  const [rating, setRating] = React.useState(null);
  const [amenities, setAmenities] = React.useState([]);

  const handleSlider = (event, newValue) => setPrice(newValue);

  const handleRating = (value) => setRating(value);

  const handleAmenity = (event) => {
    const { value, checked } = event.target;
    setAmenities((prev) =>
      checked ? [...prev, value] : prev.filter((a) => a !== value)
    );
  };

  return (
    <Box sx={{  }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Filters
      </Typography>
      {/* Price Accordion */}
      <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
          <Typography fontWeight={500}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>
          <Slider
            min={500}
            max={20000}
            step={100}
            value={price}
            onChange={handleSlider}
            valueLabelDisplay="off"
            sx={{ color: 'teal', mb: 1 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
            <span>${price[0]}</span>
            <span>${price[1]}</span>
          </Box>
        </AccordionDetails>
      </Accordion>

      <hr className='border border-gray-300' />

      {/* Rating Accordion */}
      <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
          <Typography fontWeight={500}>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>
          <Stack direction="row" spacing={1} mb={1}>
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={rating === num ? 'contained' : 'outlined'}
                size="small"
                sx={{
                  minWidth: 38,
                  borderRadius: 2,
                  p: 0,
                  fontWeight: 600,
                  backgroundColor: rating === num ? 'teal' : 'white',
                  color: rating === num ? 'white' : 'teal',
                  borderColor: 'teal',
                  '&:hover': {
                    backgroundColor: rating === num ? '#008080' : '#f0f0f0',
                  },
                }}
                onClick={() => handleRating(num)}
              >
                {num}+
              </Button>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Amenities Checkboxes */}
      <FormGroup sx={{ mt: 1 }}>
        {amenitiesList.map((amenity) => (
          <FormControlLabel
            key={amenity}
            control={
              <Checkbox
                checked={amenities.includes(amenity)}
                onChange={handleAmenity}
                value={amenity}
                sx={{
                  color: 'teal',
                  '&.Mui-checked': { color: 'teal' },
                  p: 0.5,
                }}
              />
            }
            label={<Typography fontSize={15}>{amenity}</Typography>}
            sx={{ mb: 0.5 }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default FilterSidebar;
