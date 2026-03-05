import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import BlobSpline from "../../Components/BlobSpline/BlobSpline";

export default function Home({ onReady }) {

  // Sécurité : si jamais BlobSpline ne déclenche pas onReady
  useEffect(() => {
    const timer = setTimeout(() => {
      onReady?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home">
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        {/* BLOB EN FOND */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <BlobSpline onReady={onReady} />
        </Box>

        {/* TEXTE PAR-DESSUS */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 8 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Corinthia",
              fontSize: { xs: "34px", md: "65px" },
            }}
          >
            Hi! I’m Abla
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "40px", md: "95px" },
              lineHeight: 1.1,
              fontFamily: "Cinzel",
            }}
          >
            Full-Stack
            <br />
            Developer
          </Typography>
        </Box>
      </Box>
    </section>
  );
}