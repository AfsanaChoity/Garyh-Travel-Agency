"use client"

import { useState } from "react"
import { Box, Typography, Checkbox, FormControlLabel, } from "@mui/material"
import { Close } from "@mui/icons-material"
import NameInput from "./NameInput/NameInput"
import EmailInput from "../../Component/Shared/EmailInput"
import PasswordInput from "../../Component/Shared/PasswordInput"
import CustomButton from "../../Component/Shared/CustomButton"
import FormBackground from "../../Component/Shared/FormBackground"
import CloseButton from "../../Component/Shared/CloseButton"
import { Link } from "react-router-dom"


export default function SignUp() {
  const [formData, setFormData] = useState({
    nameAndSurname: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setLoading(false)
    }, 2000)
  }

  const handleClose = () => {
    console.log("Navigating to home page")
  }

  return (
    <FormBackground text="Create Account">
      {/* Close Button */}
      <CloseButton onClose={handleClose} />

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
        {/* Name Input */}
        <NameInput
          value={formData.nameAndSurname}
          onChange={handleInputChange("nameAndSurname")}
          label="Name and Surname"
        />

        {/* Email Input */}
        <EmailInput value={formData.email} onChange={handleInputChange("email")} label="Email Address" />

        {/* Password Input */}
        <PasswordInput value={formData.password} onChange={handleInputChange("password")} label="Password" />

        {/* Terms and Privacy Checkbox */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange("agreeToTerms")}
                sx={{
                  color: "grey.400",
                  "&.Mui-checked": {
                    color: "#4db6ac",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                I agree with{" "}
                <Link href="#" sx={{ color: "#468F9D", textDecoration: "none" }}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" sx={{ color: "#468F9D", textDecoration: "none" }}>
                  Privacy
                </Link>
              </Typography>
            }
          />
        </Box>

        {/* Sign Up Button */}
        <Link to="/login">
        <CustomButton
          text="Sign Up"
        // onClick={handleSubmit}

        /></Link>

        {/* Login Link */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#468F9D",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Log In
          </Link>
        </Typography>
      </Box>
    </FormBackground>
  )
}
