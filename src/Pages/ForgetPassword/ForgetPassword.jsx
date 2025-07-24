

import { useState } from "react"
import { Box } from "@mui/material"
import { Key } from "@mui/icons-material"
import FormBackground from "../../Component/Shared/FormBackground"
import CloseButton from "../../Component/Shared/CloseButton"
import FormIcon from "../../Component/Shared/FormIcon"
import FormSubtitle from "../../Component/Shared/FormSubtitle"
import EmailInput from "../../Component/Shared/EmailInput"
import CustomButton from "../../Component/Shared/CustomButton"
import BackToLogin from "../../Component/Shared/BackToLogin"
import { Link } from "react-router-dom"

export default function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Reset password email sent to:", email)
      setLoading(false)
      // You can add success message or redirect here
    }, 2000)
  }

  const handleClose = () => {
    console.log("Navigating to home page")
  }

  return (
    <FormBackground text="Forgot Password" icon={<FormIcon icon={Key} />}>
      

      
      

      {/* Subtitle */}
      <FormSubtitle text="Please enter your email to get verification code" />

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
        {/* Email Input */}
        <EmailInput value={email} onChange={handleEmailChange} label="Email Address" />

        {/* Reset Password Button */}
       <Link to="/check-your-email">
        <CustomButton text="Continue"   />
       </Link>

        {/* Back to Login Link */}
        <BackToLogin to="/login" />
      </Box>
    </FormBackground>
  )
}
