import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import me from "/assets/me.png";
import BottomBox_about from "../../BottomBox_about/BottomBox_about";

export default function About({ onReady }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const montrealTime = new Date().toLocaleTimeString("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
  });

  const isMobile = useMediaQuery("(max-width:830px)");
  const isMedium = useMediaQuery("(min-width:750px) and (max-width:1240px)");

  // Quand l'image est chargée (ou erreur), on peut arrêter le loader
  useEffect(() => {
    if (imgLoaded || imgError) onReady?.();
  }, [imgLoaded, imgError, onReady]);

  return (
    <Box
      sx={{
        height: { xs: "normal", md: "90vh" },
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "column",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          gap: { xs: 3, md: 6 },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          marginTop: "20px",
          height: { xs: "76%", md: "90%" },
        }}
      >
        {/* LEFT: IMAGE FRAME */}
        <Box
          sx={{
            flex: { xs: "0", md: "1" },
            borderRadius: "5px",
            overflow: "hidden",
            backgroundColor: "#eee",
            height: isMedium ? "auto" : { xs: "30vh", md: "520px" },
          }}
        >
          <Box
            component="img"
            src={me}
            alt="Abla"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            sx={{
              width: "100%",
              height: isMedium ? "100%" : { xs: "300px", md: "100%" },
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* RIGHT: TEXT CARD */}
        <Box
          sx={{
            width: { xs: "100%", md: "360px" },
            borderRadius: "5px",
            background:
              "radial-gradient(circle at top left, #94B577 0%, #ffffff 70%)",
            fontFamily: "Inter, sans-serif",
            fontWeight: "300",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "26px", mb: { xs: "5px", md: "10px" }, fontFamily: "Inter-regular" }}>
            Abla Victoire Agboli
          </Typography>

          <Typography sx={{ fontSize: "13px", opacity: 0.85, mb: { xs: "5px", md: "30px" }, fontFamily: "Open Sans" }}>
            Full-Stack Developer • Montreal • Canada
          </Typography>

          <Typography sx={{ fontWeight: 700, mb: { xs: "5px", md: "30px" }, fontFamily: "Great-vibes" }}>
            JavaScript • React • API Integration • Node/Express • PostgreSQL
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8, mb: { xs: "5px", md: "30px" }, fontFamily: "Open Sans", fontSize: "14px", textAlign: "justify" }}>
            I build clean, user-centered web apps with modern UI and solid backend APIs.
            I enjoy turning ideas into reliable products with thoughtful UX.
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", mb: { xs: "5px", md: "30px" }, lineHeight: 1.8, fontFamily: "Open Sans", fontSize: "14px" }}>
            Open to collaboration and opportunities. Let’s connect anytime!
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8, fontFamily: "Open Sans", fontSize: "14px", opacity: 0.85 }}>
            Local time • {montrealTime} • UTC-5
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ mt: { xs: 0, md: 3 } }}>
        <BottomBox_about />
      </Box>
    </Box>
  );
}