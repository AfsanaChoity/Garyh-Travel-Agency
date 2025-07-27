

import { useState } from "react"
import { Box, Typography } from "@mui/material"
import FormBackground from "../../Component/Shared/FormBackground"
import CloseButton from "../../Component/Shared/CloseButton"
import EmailInput from "../../Component/Shared/EmailInput"
import PasswordInput from "../../Component/Shared/PasswordInput"
import ForgotPasswordLink from "../../Component/ForgetPasswordLink/ForgetPasswordLink"
import CustomButton from "../../Component/Shared/CustomButton"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../Hooks/UseAuth"


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setLoading(true)

  //   // Simulate API call
  //   setTimeout(() => {
  //     console.log("Login submitted:", formData)

  //     setLoading(false)
  //   }, 2000)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const fakeUser = {
        name: "Afsana",
        email: formData.email,
        avatar: "https://i.pravatar.cc/150?img=3", // placeholder image
      };

      login(fakeUser); // sets user in context
      console.log("Login submitted:", formData);
      setLoading(false);
      navigate("/"); // go to home
    }, 2000);
  };
  const handleClose = () => {
    console.log("Navigating to home page")
  }



  return (
    <FormBackground text="Login">
      {/* Close Button */}
      <CloseButton onClose={handleClose} />

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
        {/* Email Input */}
        <EmailInput value={formData.email} onChange={handleInputChange("email")} label="Email Address" />

        {/* Password Input */}
        <PasswordInput value={formData.password} onChange={handleInputChange("password")} label="Password" />

        {/* Forgot Password Link */}
        <ForgotPasswordLink />

        {/* Sign In Button */}

        <CustomButton
          text="Sign In"
          onClick={handleSubmit}
        ></CustomButton>


        {/* Sign Up Link */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/sign-up"

            style={{
              color: "#468F9D",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </FormBackground>
  )
}
