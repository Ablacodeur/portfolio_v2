import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../../Components/Card/MediaCard";
import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BottomBox from "../../Components/BottomBox/BottomBox";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/projects");
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
        height: "90vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

    <MarqueeText text="Crafting Code • Building Experiences • Transforming Ideas Into Reality •" />
      <Box sx={{ width: "100%", py: 2 }}>
        

        <Swiper
          spaceBetween={26}
          grabCursor={true}     // ✅ souris “grab”
          freeMode={true}       // ✅ pousse librement 
          slidesPerView={"auto"}// ✅ chaque card garde sa taille
          style={{ padding: "0 16px" }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{ width: "auto" }} // ✅ important pour garder la taille du MediaCard
            >
              <MediaCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <BottomBox />
    </Box>
  );
}
