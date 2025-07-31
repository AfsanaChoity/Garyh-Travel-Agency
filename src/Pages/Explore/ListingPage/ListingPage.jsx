import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ExploreListingCard from '../../../Component/Shared/ExploreListingCard/ExploreListingCard';

import img1 from "../../../assets/ChangedImages/img1.jpg";
import img2 from "../../../assets/ChangedImages/img2.jpg";
import img3 from "../../../assets/ChangedImages/img3.jpg";
import img4 from "../../../assets/ChangedImages/img4.jpg";
import img5 from "../../../assets/ChangedImages/img5.jpg";
import img6 from "../../../assets/ChangedImages/img6.jpg";


// Example data
const listings = [
  {
    // 1
    image: img1,
    imagesCount: 9,
    title: "Pine Creek Retreat",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "39.90",
    currency: "$",
    priceSuffix: "", // USD shows only amount, no "/night"
  },
  {
    // 2
    image: img2,
    imagesCount: 9,
    title: "Sedona Vista Camp",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "2349",
    currency: "₹",
    priceSuffix: "/night",
    exclTax: true,
  },
  {
    // 3
    image: img3,
    imagesCount: 9,
    title: "Blue Ridge Escape",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "2349",
    currency: "₹",
    priceSuffix: "/night",
    exclTax: true,
  },
  {
    // 4
    image: img4,
    imagesCount: 9,
    title: "Nomad's Grove",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "2349",
    currency: "₹",
    priceSuffix: "/night",
    exclTax: true,
  },
  {
    // 5
    image: img5,
    imagesCount: 9,
    title: "Sunset Hollow",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "2349",
    currency: "₹",
    priceSuffix: "/night",
    exclTax: true,
  },
  {
    // 6
    image: img6,
    imagesCount: 9,
    title: "Pine Creek Retreat",
    location: "Pine Creek Retreat – Asheville, NC",
    amenities: "20+ Aminities",
    rating: 4.2,
    reviews: 371,
    price: "39.90",
    currency: "$",
    priceSuffix: "",
    exclTax: true,
  }
];


const ListingPage = () => (
   <Box sx={{  width:"100%", pb: 6 }}>
    {/* Header */}
    <Box sx={{ display: "flex", justifyContent: "space-between",flexDirection: { xs: "column", md: "row" }, mb: 2, alignItems: "center" }}>
      <Typography variant="subtitle1" sx={{ color: "#1b2c24", fontWeight: 600 }}>
        Showing <span style={{ color: "#2db6c4" }}>4</span> of <span style={{ color: "#ef4e5d" }}>257 places</span>
      </Typography>
      <Button
        variant="text"
        size="small"
        sx={{ color: "#37979C", textTransform: "none", fontWeight: 500, fontSize: 16 }}
        endIcon={<span style={{ fontSize: 19 }}>▼</span>}
      >
        Sort by Recommended
      </Button>
    </Box>

    {/* Listings */}
    {listings.map((listing, idx) => (
      <ExploreListingCard key={idx} {...listing} />
    ))}

    {/* Show more button */}
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Button
        variant="outlined"
        sx={{
          color: "#FFFFFF",
          borderColor: "#8AC197",
          background: "#8AC197",
          borderRadius: 1,
          px: 5,
          py: 1.4,
          fontWeight: 600,
          fontSize: 18,
          textTransform: "none",
          // maxWidth: "450px",
        }}
      >
        Show more results
      </Button>
    </Box>
  </Box>
);

export default ListingPage;
