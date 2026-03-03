import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../../Components/Card/MediaCard";
import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BottomBox from "../../Components/BottomBox/BottomBox";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";

const API = import.meta.env.VITE_API_URL;

export default function Work() {
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
    <Box sx={{ width: "100%",minHeight:{xs:"auto", md:'90vh'} }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <MarqueeText text="Crafting Code • Building Experiences • Transforming Ideas Into Reality •" />
      </Box>

      <Box
        sx={{
          
          py: 2,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "column" },
          pb: { xs: 2, md: 2 },
        }}
      >
        {/* MOBILE: scroll natif  */}
        <Box
          sx={{
            display: { xs: "flex", md: "none"},
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
                padding:'15px'
              }}
            >
              <MediaCard project={project} />
            </Box>
          ))}

          {/* petit “spacer” pour être sûr de voir la dernière carte */}
          <Box sx={{ flex: "0 0 16px" }} />
        </Box>

        {/*DESKTOP: Swiper */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Swiper
            spaceBetween={26}
            grabCursor
            slidesPerView="auto"
            slidesOffsetBefore={16}
            slidesOffsetAfter={32} // IMPORTANT: permet d’aller jusqu’à la fin
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} style={{ width: "auto" }}>
                <MediaCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <BottomBox />
      </Box>
    </Box>
  );
}