import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import BottomBox_project from "../BottomBox_project/BottomBox_project";

export default function TheProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  // <= 1030 : tablette + mobile
  const isMobile = useMediaQuery("(max-width:1030px)");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${API}/api/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.log("Erreur fetch project:", error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 6 },

        // IMPORTANT: ne bloque pas la page en tablette/mobile
        minHeight: isMobile ? "auto" : "90vh",
        overflowX: "hidden",
        overflowY: isMobile ? "visible" : "hidden",

        display: "flex",
        flexDirection: isMobile? 'column-reverse':'column',
      }}
    >
      {/* TOP SECTION */}
      <Stack
        sx={{
          width: "100%",
          gap: { xs: 3, md: 6 },
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            flex: isMobile ? "0 0 auto" : "1 1 0",
            borderRadius: "5px",
            overflow: "hidden",
            backgroundColor: "#eee",

            // Hauteur stable en tablette/mobile
            height: isMobile ? { xs: 260, sm: 320, md: 380 } : 520,
          }}
        >
          <Box
            component="img"
            src={project.image_desktop}
            alt={project.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* TEXT CARD */}
        <Box
          sx={{
            width: isMobile ? "100%" : 360,
            borderRadius: "5px",
            backgroundColor: "rgba(249, 250, 249, 0.1) !important",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            p: 3,
            border: "1px solid green",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "23px",
              mb: { xs: "5px", md: "10px" },
              fontFamily: "Inter-regular",
            }}
          >
            {project.name}
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mb: { xs: "7px", md: "10px" },
              fontFamily: "Great-vibes",
            }}
          >
            {project.frameworks}
          </Typography>

          <Typography
            sx={{
              color: "rgba(0,0,0,0.75)",
              lineHeight: 1.8,
              mb: { xs: "10px", md: "20px" },
              fontFamily: "Open Sans",
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: { xs: "7px", md: "10px" } }}>
            {project.tech_logos?.map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo}
                alt="tech"
                sx={{ width: 30, height: 30, objectFit: "contain" }}
              />
            ))}
          </Box>

          <Box>
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: "30px",
                color: "rgba(0,0,0,0.75)",
                fontFamily: "Corinthia",
                fontWeight: 700,
              }}
            >
              ☞ Visit the site here
            </a>
          </Box>
        </Box>
      </Stack>

      {/* BOTTOM INFO SECTION */}
      <Box sx={{ mt: { xs: 2, md: 6 } }}>
        <BottomBox_project text1={project.name} text3={project.user_summary} />
      </Box>
    </Box>
  );
}