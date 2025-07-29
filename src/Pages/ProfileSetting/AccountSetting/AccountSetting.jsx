import React from 'react'
import { useState } from "react"
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    TextField,
    Button,
    Paper,
    MenuItem,
    Select,
    InputAdornment,
} from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"
import TabPanel from '../../../Component/Shared/TabPanel'


export default function AccountSetting({tabValue}) {

    
        const [profileData, setProfileData] = useState({
            fullName: "",
            email: "",
            phoneNumber: "",
            countryCode: "+1",
        })
        const [profileImage, setProfileImage] = useState(null)
    
        
    
        const handleInputChange = (field) => (event) => {
            setProfileData((prev) => ({
                ...prev,
                [field]: event.target.value,
            }))
        }
    
        const handleImageUpload = (event) => {
            const file = event.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    setProfileImage(e.target.result)
                }
                reader.readAsDataURL(file)
            }
        }
    
        const handleUpdateProfile = () => {
            console.log("Updating profile:", profileData)
            // Handle profile update logic here
        }
    
        const handleReset = () => {
            setProfileData({
                fullName: "",
                email: "",
                phoneNumber: "",
                countryCode: "+1",
            })
            setProfileImage(null)
        }
    
    

  return (
    <div>
         <Container sx={{ py: 4 }}>


                {/* Main Content Card */}
               
                    

                    {/* Account Setting Tab */}
                    <TabPanel value={tabValue} index={0}>
                        <Box sx={{  }}>
                            {/* Profile Picture Section */}
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="body1" sx={{ mb: 2, color: "#333", fontWeight: "500" }}>
                                    Your Profile Picture
                                </Typography>
                                <Box sx={{ position: "relative", display: "inline-block" }}>
                                    <Box
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            border: "2px dashed #ccc",
                                            borderRadius: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: profileImage ? "transparent" : "#f9f9f9",
                                            cursor: "pointer",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                        component="label"
                                    >
                                        <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                                        {profileImage ? (
                                            <img
                                                src={profileImage || "/placeholder.svg"}
                                                alt="Profile"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <PhotoCamera sx={{ fontSize: 32, color: "#999", mb: 1 }} />
                                                <Typography variant="caption" sx={{ color: "#666", textAlign: "center", px: 1 }}>
                                                    Upload your photo
                                                </Typography>
                                            </>
                                        )}
                                    </Box>
                                </Box>
                            </Box>

                            {/* Form Fields */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                {/* Full Name */}
                                <Box>
                                    <Typography variant="body1" sx={{ mb: 1, color: "#333", fontWeight: "500" }}>
                                        Full name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter your name"
                                        value={profileData.fullName}
                                        onChange={handleInputChange("fullName")}
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                backgroundColor: "#f5f5f5",
                                                "& fieldset": {
                                                    borderColor: "#e0e0e0",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                            },
                                        }}
                                    />
                                </Box>

                                {/* Email */}
                                <Box>
                                    <Typography variant="body1" sx={{ mb: 1, color: "#333", fontWeight: "500" }}>
                                        Email
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        placeholder="Enter your email"
                                        value={profileData.email}
                                        onChange={handleInputChange("email")}
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                backgroundColor: "#f5f5f5",
                                                "& fieldset": {
                                                    borderColor: "#e0e0e0",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                            },
                                        }}
                                    />
                                </Box>

                                {/* Phone Number */}
                                <Box>
                                    <Typography variant="body1" sx={{ mb: 1, color: "#333", fontWeight: "500" }}>
                                        Phone number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter phone number"
                                        value={profileData.phoneNumber}
                                        onChange={handleInputChange("phoneNumber")}
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Select
                                                        value={profileData.countryCode}
                                                        onChange={handleInputChange("countryCode")}
                                                        variant="standard"
                                                        disableUnderline
                                                        sx={{
                                                            "& .MuiSelect-select": {
                                                                paddingRight: "24px !important",
                                                                fontSize: "14px",
                                                            },
                                                        }}
                                                    >
                                                       
                                                            <MenuItem sx={{color: "black"}} value="+1">+1</MenuItem>
                                                            <MenuItem sx={{color: "black"}} className='text-black' value="+44">+44</MenuItem>
                                                            <MenuItem sx={{color: "black"}} value="+91">+91</MenuItem>
                                                            <MenuItem sx={{color: "black"}} value="+86">+86</MenuItem>
                                                       
                                                    </Select>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                backgroundColor: "#f5f5f5",
                                                "& fieldset": {
                                                    borderColor: "#e0e0e0",
                                                },
                                                
                                                "&:hover fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#468F9D",
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>

                            {/* Action Buttons */}
                            <Box sx={{ display:"flex", flexDirection: {md:"row", xs: "column"}, gap: 2, mt: 4 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleUpdateProfile}
                                    sx={{
                                        backgroundColor: "#468F9D",
                                        "&:hover": {
                                            backgroundColor: "#4db6ac",
                                        },
                                        px: 4,
                                        py: 1.5,
                                        textTransform: "none",
                                        fontWeight: "500",
                                    }}
                                >
                                    Update Profile
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={handleReset}
                                    sx={{
                                        borderColor: "#ccc",
                                        color: "#666",
                                        "&:hover": {
                                            borderColor: "#999",
                                            backgroundColor: "#f5f5f5",
                                        },
                                        px: 4,
                                        py: 1.5,
                                        textTransform: "none",
                                        fontWeight: "500",
                                    }}
                                >
                                    Reset
                                </Button>
                            </Box>
                        </Box>
                    </TabPanel>

                  
               
            </Container>
    </div>
  )
}
