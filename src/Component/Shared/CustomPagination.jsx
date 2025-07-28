"use client"

import { useState } from "react"
import { Box, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

export default function CustomPagination({ totalPages = 5, currentPage = 1, onPageChange }) {
  const [activePage, setActivePage] = useState(currentPage)

  const handlePageClick = (page) => {
    setActivePage(page)
    if (onPageChange) {
      onPageChange(page)
    }
  }

  const handlePrevious = () => {
    if (activePage > 1) {
      const newPage = activePage - 1
      setActivePage(newPage)
      if (onPageChange) {
        onPageChange(newPage)
      }
    }
  }

  const handleNext = () => {
    if (activePage < totalPages) {
      const newPage = activePage + 1
      setActivePage(newPage)
      if (onPageChange) {
        onPageChange(newPage)
      }
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Box
          key={i}
          onClick={() => handlePageClick(i)}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: activePage === i ? "#4db6ac" : "transparent",
            color: activePage === i ? "white" : "#9e9e9e",
            fontWeight: activePage === i ? "600" : "400",
            fontSize: "14px",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: activePage === i ? "#26a69a" : "#f5f5f5",
              color: activePage === i ? "white" : "#666",
            },
          }}
        >
          {i.toString().padStart(2, "0")}
        </Box>,
      )
    }
    return pages
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        py: 2,
      }}
    >
      {/* Previous Button */}
      <IconButton
        onClick={handlePrevious}
        disabled={activePage === 1}
        sx={{
          width: 40,
          height: 40,
          color: activePage === 1 ? "#e0e0e0" : "#9e9e9e",
          "&:hover": {
            backgroundColor: activePage === 1 ? "transparent" : "#f5f5f5",
          },
          "&:disabled": {
            color: "#e0e0e0",
          },
        }}
      >
        <ChevronLeft />
      </IconButton>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        disabled={activePage === totalPages}
        sx={{
          width: 40,
          height: 40,
          color: activePage === totalPages ? "#e0e0e0" : "#9e9e9e",
          "&:hover": {
            backgroundColor: activePage === totalPages ? "transparent" : "#f5f5f5",
          },
          "&:disabled": {
            color: "#e0e0e0",
          },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  )
}
