import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SideElements() {
  return (
    <Box >
      {/*BARRE + ICONES GAUCHE */}
      <Box
        sx={{
          position: "absolute",
          left: 20,
          top: "60%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          zIndex: 30,
        }}
      >
        {/* Barre verticale */}
        <Box
          sx={{
            width: "2px",
            height: 150,
            bgcolor: "black",
            borderRadius: 999,
            mb: 2,
          }}
        />

        {/* Icônes */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/victoire-agboli"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          onClick={() => alert("i got a click")}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton href="https://wa.me/5142628032" target="_blank" size="small">
          <WhatsAppIcon fontSize="small" />
        </IconButton>

        <IconButton href="https://github.com/ablacodeur" target="_blank" size="small">
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* NOM VERTICAL DROITE */}
      <Box
        sx={{
          position: "absolute",
          right: 20,
          top: "30%",
          transform: "translateY(50%) rotate(-90deg)",
          transformOrigin: "right center",
          display: { xs: "none", md: "block" },
          zIndex: 10,
        }}
      >
        <Typography
          sx={{
            letterSpacing: 5,
            fontSize: 12,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          ABLA VICTOIRE AGBOLI
        </Typography>
      </Box>
    </Box>
  );
}
