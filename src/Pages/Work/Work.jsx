import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../../Components/Card/MediaCard";
import { Box, useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BottomBox from "../../Components/BottomBox/BottomBox";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";

const API = import.meta.env.VITE_API_URL;

export default function Work() {

  const isMobile = useMediaQuery("(max-width:550px)");
  const isMedium = useMediaQuery("(min-width:750px) and (max-width:1240px)");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API}/api/projects`);
        setProjects(res.data);
      } catch (error) {
        console.log("Erreur fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "90vh", xl: "100vh" },
      }}
    >
      {/* Marquee uniquement desktop */}
      <Box sx={{ marginTop:isMedium? '4vh':'null' }}>
      {!isMobile && (
        <MarqueeText  text="Crafting Code • Building Experiences • Transforming Ideas Into Reality •" />
      )}
      </Box>

      <Box
        sx={{
          py: 2,
          display: "flex",
           flexDirection: isMobile ? "column-reverse" : "column",
          pb: 2,
        }}
      >

        {/* MOBILE */}
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden",
              gap: 2,
              px: 2,
              pb: 2,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  flex: "0 0 auto",
                  scrollSnapAlign: "start",
                  padding: "15px",
                }}
              >
                <MediaCard project={project} />
              </Box>
            ))}

            <Box sx={{ flex: "0 0 16px" }} />
          </Box>
        )}

        {/* DESKTOP */}
        {!isMobile && (
          <Box sx={{ marginTop:isMedium? '10vh':'null' }}>
          <Swiper 
            spaceBetween={26}
            grabCursor
            slidesPerView="auto"
            slidesOffsetBefore={16}
            slidesOffsetAfter={32}
            
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} style={{ width: "auto" }}>
                <MediaCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          </Box>
        )}
        <Box sx={{ marginTop:isMedium? '8vh':'null' }}>
        <BottomBox />
        </Box>
      </Box>
    </Box>
  );
}
