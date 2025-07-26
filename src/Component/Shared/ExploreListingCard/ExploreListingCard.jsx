import React from "react";
import {
    Paper,
    Box,
    CardMedia,
    Chip,
    Typography,
    IconButton,
    Stack,
    Button,
    Divider
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link } from "react-router-dom";

const ExploreListingCard = ({
    image,
    imagesCount,
    title,
    location,
    amenities,
    rating,
    reviews,
    price,
    currency,
    priceSuffix,
    exclTax,
}) => (
    <Paper
        elevation={0}
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mb: 3,
            borderRadius: 3,
            p: 0,
            boxShadow: "0 8px 24px 0 #21353f14",
            overflow: "hidden",
            border: "1.5px solid #eef4f8"
        }}
    >
        {/* Image with overlay */}
        <Box sx={{ position: "relative",
                width: { xs: "100%", md: 250 },
                height: { xs: 280, md: 280 },
                flexShrink: 0 }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Chip
                size="small"
                icon={<PhotoLibraryIcon sx={{ fontSize: 17 }} />}
                label={`${imagesCount} images`}
                sx={{
                    position: "absolute",
                    top: 13,
                    right: 13,
                    background: "#eeeeeeeb",
                    color: "#4b4b4b",
                    fontWeight: 500,
                    fontSize: 13,
                    px: 1,
                    zIndex: 2
                }}
            />
        </Box>
        {/* Info */}
        <Box sx={{ flex: 1,p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {/* Top Row: Title, Location, Price */}
            <Box sx={{ display: "flex", alignItems: "flex-start",  justifyContent: "space-between" }}>
                <Box>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5, lineHeight: 1.2 }}>
                        {title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mb={0.6}>
                        <LocationOnIcon sx={{ fontSize: 18, color: "#888" }} />
                        <Typography variant="body2" color="text.secondary">
                            {location}
                        </Typography>
                    </Stack>
                </Box>


            </Box>


            <Box sx={{ display: "flex",flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    {/* Stars, Amenities */}
                    <Stack direction="row" alignItems="center" spacing={2} mb={1.1} mt={0.6}>
                        {/* Stars */}
                        <Stack direction="row" alignItems="center" spacing={0.2}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <StarIcon
                                    key={i}
                                    sx={{ color: "#37b7ae", fontSize: 19, opacity: 1 }}
                                />
                            ))}
                        </Stack>
                        {/* Amenities */}
                        <Stack direction="row" alignItems="center" spacing={0.4}>
                            <LocalCafeIcon sx={{ fontSize: 18, color: "#232323" }} />
                            <Typography variant="body2" sx={{ color: "#222", fontWeight: 500 }}>
                                {amenities}
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* Reviews section stays below */}
                    <Stack direction="row" alignItems="center" spacing={1.2} mb={1.6}>
                        {/* Rating badge */}
                        <Box
                            sx={{
                                border: "1.5px solid #b2d9c6",
                                borderRadius: "7px",
                                px: 1.1,
                                py: 0.4,
                                minWidth: 37,
                                textAlign: "center",
                                background: "#fff"
                            }}
                        >
                            <Typography sx={{ fontWeight: 600, color: "#1b2c24", fontSize: 16 }}>
                                {rating}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: "#232323", fontSize: 16 }}>
                            Very Good
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                            {reviews} reviews
                        </Typography>
                    </Stack>
                </Box>

                {/* Price Section */}
                <Box>
                    <Box sx={{ textAlign:{xs: "center", md: "right"}, }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.4 }}>
                            starting from
                        </Typography>
                        <Typography
                            sx={{ fontWeight: 700, fontSize: 20, color: "#37979C", lineHeight: 1.1 }}
                        >
                            {currency}{" "}
                            {currency === "₹" ? (
                                <span style={{ fontWeight: 700 }}>{price}{priceSuffix}</span>
                            ) : (
                                <span style={{ fontWeight: 700 }}>{price}</span>
                            )}
                        </Typography>
                        {exclTax && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontSize: 13, mt: 0.3 }}
                            >
                                excl. tax
                            </Typography>
                        )}
                    </Box>
                </Box>


            </Box>

            <Divider sx={{ my: 2, borderColor: "#f0f0f0" }} />
            {/* Bottom section (buttons) */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flex: 2, display: "flex", gap: 2 }}>
                    <IconButton
                        sx={{
                            border: "2px solid #b2d9c6",
                            borderRadius: 2,
                            background: "#fff",
                            mr: 2,
                            p: 1.3
                        }}
                    >
                        <FavoriteBorderIcon sx={{ color: "#468F9D", fontSize: 27, background: "" }} />
                    </IconButton>
                    <Link to="/booking"
                    className="w-full bg-[#468F9D] flex justify-center items-center rounded-xl text-white  font-medium md:text-[18px] md:font-semibold"
                       
                    >
                        View Details
                    </Link>
                </Box>
            </Box>
        </Box>
    </Paper>
);

export default ExploreListingCard;
