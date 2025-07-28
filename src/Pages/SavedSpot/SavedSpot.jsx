import React from 'react'
import SharedHeading from '../../Component/Shared/SharedHeading'

import { Box, Typography, Button } from '@mui/material';


import img1 from "../../assets/images/explore/img1.jpg";
import img2 from "../../assets/images/explore/img2.jpg";
import img3 from "../../assets/images/explore/img3.jpg";
import ExploreListingCard from '../../Component/Shared/ExploreListingCard/ExploreListingCard';
import Card from './Card';
import CustomPagination from '../../Component/Shared/CustomPagination';

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
]

export default function SavedSpot() {
    return (
        <div>
            <div>
                <SharedHeading text="Saved Spot"></SharedHeading>
            </div>

            <div>
                <Box sx={{ width: "100%", pt: 3, pb: 6 }}>
                   

                    {/* Listings */}
                    {listings.map((listing, idx) => (
                        <Card key={idx} {...listing} />
                    ))}

                    {/* Show more button */}
                   <CustomPagination></CustomPagination>
                </Box>
            </div>
        </div>
    )
}
