
import { Button } from "@mui/material"

export default function CustomButton({ text, onClick }) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={onClick}
      
      sx={{
        backgroundColor: "#468F9D",
        color: "white",
        py: 1.5,
        borderRadius: 3,
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 500,
        mb: 3,
        "&:hover": {
          backgroundColor: "#26a69a",
        },
       
      }}
    >
      { text}
    </Button>
  )
}
