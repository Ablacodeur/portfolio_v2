import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BottomBox from "../BottomBox/BottomBox";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TheProject() {
  const { id } = useParams(); // récupère l'id dans l'URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/projects/${id}`
        );
        setProject(res.data);
      } catch (error) {
        console.log("Erreur fetch project:", error);
      }
    };

    fetchProject();
  }, [id]);  
  
  // IMPORTANT: stop render tant que project est null
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        maxHeight: "90vh",
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 6 },
      }}
    >
      {/* TOP SECTION */}
      <Stack
        sx={{
          width: "100%",
          gap: { xs: 3, md: 6 },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",// pour que les 2 blocs prennent la mm hauteuur
        }}
      >
        {/* LEFT: IMAGE FRAME */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "5px",
            overflow: "hidden",
            backgroundColor: "#eee",
            height: { xs: "320px", md: "520px" },
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

        {/* RIGHT: TEXT CARD */}
        <Box
          sx={{
            width: { xs: "100%", md: "360px" },
            borderRadius: "5px",
            backgroundColor: "rgba(249, 250, 249, 0.1) !important",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
            boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
            fontFamily: "Inter, sans-serif",
            fontWeight:'300',
            p: 3,
            border:'1px solid green'
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "23px", mb: 4.5 ,fontFamily: "Inter-regular"}}>
            {project.name}
          </Typography>


          <Typography sx={{ fontWeight: 700, mb: 4,fontFamily: "Great-vibes" }}>
            {project.frameworks}
          </Typography>

          <Typography sx={{ color: "rgba(0,0,0,0.75)", lineHeight: 1.8, mb: 8,fontFamily: "Open Sans",fontSize: "14px",textAlign:'justify' }}>
            {project.description}
          </Typography>
            <Box>
            <a
                href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none",fontSize:'30px',color: "rgba(0,0,0,0.75)" ,fontFamily: "Corinthia",fontWeight: 700 }}
                >
                ☞ Visit the site here
            </a>
            </Box>

        </Box>
      </Stack>

      {/* BOTTOM INFO SECTION */}
      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <BottomBox />
      </Box>
    </Box>
  );
}
