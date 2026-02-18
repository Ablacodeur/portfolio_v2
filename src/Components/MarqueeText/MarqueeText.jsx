import React from "react";
import { Box, Typography } from "@mui/material";

export default function MarqueeText({
  text = "Deliver impactful, user-centered digital product solutions",
  speed = 40,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          animation: `marquee ${speed}s linear infinite`,
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {/* DUPLICATION */}
        {[1, 2].map((_, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: { xs: "60px", md: "70px" }, // ✅ BIG
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "2px",

              // ✅ Outline text style
              color: "transparent",
              WebkitTextStroke: "2px rgba(122,63,43,0.65)",

              fontFamily: "Inter, sans-serif",

              pr: 6, // espace entre répétitions
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
