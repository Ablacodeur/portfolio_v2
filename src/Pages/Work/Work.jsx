import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import MediaCard from "../../Components/Card/MediaCard";
import BottomBox from "../../Components/BottomBox/BottomBox";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const API = import.meta.env.VITE_API_URL;
console.log("API:", API);

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
    // ✅ Section à hauteur fixe (design full screen) 
    <Box
      sx={{
        height: { xs: "100dvh", md: "90vh" }, //iPhone safe
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Marquee desktop only */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <MarqueeText text="Crafting Code • Building Experiences • Transforming Ideas Into Reality •" />
      </Box>

      {/* ✅ Zone qui scroll à l'intérieur  */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          py: 2,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "column" },
          overflowY: "auto", 
          overflowX: "hidden",
          pb: { xs: 10, md: 2 },
          WebkitOverflowScrolling: "touch", 
        }}
      >
        <Swiper
          spaceBetween={26}
          grabCursor={true}
          freeMode={true}
          slidesPerView={"auto"}
          style={{ padding: "0 16px 24px" }} 
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} style={{ width: "auto" }}>
              <MediaCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <BottomBox />
      </Box>
    </Box>
  );
}