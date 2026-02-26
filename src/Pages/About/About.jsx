import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import me from "../../../public/assets/projects/me.png"
import BottomBox_about from "../../BottomBox_about/BottomBox_about";





export default function About() {
    const currentYear = new Date().getFullYear();

    const montrealTime = new Date().toLocaleTimeString("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    });


  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 6 },
        display:'flex',
        flexDirection:{xs:'column-reverse',md:'column'}
      }}
    >
      {/* TOP SECTION */}
      <Stack
        sx={{
          width: "100%",
          gap: { xs: 3, md: 6 },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",// pour que les 2 blocs prennent la mm hauteuur
          marginTop:'20px',
          height:{xs:'76%',md:'90%'}
        }}
      >
        {/* LEFT: IMAGE FRAME */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "5px",
            overflow: "hidden",
            backgroundColor: "#eee",
            height: { xs: "220px", md: "520px" },
          }}
        >
          <Box
            component="img"
            src={me}
            alt="Abla"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", //pas écrasée
              display: "block",
            }}
          />
        </Box>

        {/* RIGHT: TEXT CARD */}
        <Box
          sx={{
            width: { xs: "100%", md: "360px" },
            borderRadius: "5px",
            background: "radial-gradient(circle at top left, #94B577 0%, #ffffff 70%)",
            fontFamily: "Inter, sans-serif",
            fontWeight:'300',
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "26px", mb: {xs:'5px',md:'10px'} ,fontFamily: "Inter-regular"}}>
            Abla Victoire Agboli
          </Typography>

          <Typography sx={{ fontSize: "13px", opacity: 0.85, mb: {xs:'5px',md:'30px'},fontFamily: "Open Sans" }}>
            Full-Stack Developer • Montreal • Canada
          </Typography>

          <Typography sx={{ fontWeight: 700, mb: {xs:'5px',md:'30px'},fontFamily: "Great-vibes" }}>
            JavaScript • React • API Integration • Node/Express • PostgreSQL
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8, mb: {xs:'5px',md:'30px'},fontFamily: "Open Sans",fontSize: "14px",textAlign:'justify' }}>
            I build clean, user-centered web apps with modern UI and solid
            backend APIs. I enjoy turning ideas into reliable products with
            thoughtful UX.
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)",mb: {xs:'5px',md:'30px'}, lineHeight: 1.8,fontFamily: "Open Sans",fontSize: "14px"}}>
            Open to collaboration and opportunities. Let’s connect anytime!
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8,fontFamily: "Open Sans",fontSize: "14px", opacity: 0.85}}>
            Local time • {montrealTime} • UTC-5
          </Typography>

        </Box>
      </Stack>

      {/* BOTTOM INFO SECTION */}
      <Box sx={{ mt: { xs: 0, md: 3 } }}>
        <BottomBox_about
         />
      </Box>
    </Box>
  );
}
