import React from "react";
import Hero from "../../Pages/Home/Home";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef } from "react";
import Work from "../../Pages/Home/Work/Work";


export default function Browser({ onHeroReady }) {

  gsap.registerPlugin(ScrollTrigger);

  const heroRef = useRef(null);
  
  return (
    <Box>
      <Navbar />

      <Box ref={heroRef}>
        <Hero onReady={onHeroReady} />
      </Box>
      <Box>
        <Work />
      </Box>
      {/* <Box ref={aboutRef}>
        <AboutMyCode />
      </Box>
      <Works />
      <My_Services />
      <Contact /> */}
    </Box>
  );
}
