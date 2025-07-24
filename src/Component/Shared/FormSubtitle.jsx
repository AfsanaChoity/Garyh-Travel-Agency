import { Typography } from "@mui/material"

export default function FormSubtitle({ text, children }) {
  return (
    <Typography
      variant="body2"
      sx={{
        textAlign: "center",
        color: "text.secondary",
        mb: 4,
        lineHeight: 1.5,
      }}
    >
      {text}
      {children}
    </Typography>
  )
}
