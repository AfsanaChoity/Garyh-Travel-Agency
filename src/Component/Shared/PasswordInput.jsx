

import { useState } from "react"
import { TextField, Typography, Box, IconButton, InputAdornment } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

export default function PasswordInput({ value, onChange, label = "Password" }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 1,
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "grey.500" }}>
                {showPassword ? <Visibility/> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "#fafafa",
          },
        }}
      />
    </Box>
  )
}
