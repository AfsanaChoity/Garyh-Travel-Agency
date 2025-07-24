
import { IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"

export default function CloseButton({ onClose }) {
  const handleClose = () => {
    // Navigate to home page
    window.location.href = "/"
    // Or if using React Router: navigate("/")
    if (onClose) {
      onClose()
    }
  }

  return (
    <IconButton
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 16,
        top: 16,
        color: "grey.500",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
          color: "grey.700",
        },
        zIndex: 10,
      }}
    >
      <Close />
    </IconButton>
  )
}
