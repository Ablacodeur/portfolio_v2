import { Box, Typography } from "@mui/material";
import BlobSpline from "../../Components/BlobSpline/BlobSpline";

export default function Home({ onReady }) {
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
          minHeight: "100vh",
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
            fontSize: { xs: "34px", md: "56px" },
            mb: 2,
          }}
        >
          Hi! I’m Abla
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "40px", md: "90px" },
            lineHeight: 1.1,
            fontFamily: "Cinzel",
          }}
        >
          Full-Stack
          <br />
          Developer
        </Typography>

        <Typography
          sx={{
            mt: 20,
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Scroll down
        </Typography>
      </Box>
    </Box>
    </section>
  );
}
