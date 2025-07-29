import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function CustomPagination({ totalPages = 10, currentPage = 1, onPageChange }) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page) => {
    setActivePage(page);
    if (onPageChange) onPageChange(page);
  };

  const handlePrevious = () => {
    if (activePage > 1) handlePageClick(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) handlePageClick(activePage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show pages 1, 2, 3
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(renderPageBox(i));
    }

    // Show ellipsis if current page is beyond 4 and not near the end
    if (activePage >= 4 && activePage < totalPages) {
      pages.push(<Box key="dots1" sx={{ px: 1, color: "#9e9e9e" }}></Box>);
      pages.push(renderPageBox(activePage));
    }

    // Ellipsis before last page if current page is not close
    if (activePage < totalPages - 2) {
      pages.push(<Box key="dots2" sx={{ px: 1, color: "#9e9e9e" }}>....</Box>);
    }

    // Always show last page
    if (totalPages > 3) {
      pages.push(renderPageBox(totalPages));
    }

    return pages;
  };

  const renderPageBox = (page) => (
    <Box
      key={page}
      onClick={() => handlePageClick(page)}
      sx={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: activePage === page ? "#4db6ac" : "transparent",
        color: activePage === page ? "white" : "#9e9e9e",
        fontWeight: activePage === page ? "600" : "400",
        fontSize: "14px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: activePage === page ? "#26a69a" : "#f5f5f5",
          color: activePage === page ? "white" : "#666",
        },
      }}
    >
      {page}
    </Box>
  );

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
        }}
      >
        <ChevronLeft />
      </IconButton>

      {renderPageNumbers()}

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
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}
