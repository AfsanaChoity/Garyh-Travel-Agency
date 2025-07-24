

import {  Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function ForgotPasswordLink() {
  return (
    <Typography
      variant="body2"
      sx={{
        textAlign: "right",
        mb: 3,
      }}
    >
      <Link
        to="/forgot-password"

        style={{
          color: "#468F9D",
          textDecoration: "none",
          fontSize: "0.875rem",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Forgot your password?
      </Link>
    </Typography>
  )
}
