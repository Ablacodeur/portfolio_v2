import { Box, Typography } from "@mui/material";

export default function Loader({ visible }) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#ffffff",
        color: "black",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-10px)",
        transition: "opacity .65s ease, transform .65s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* glow */}
      <Box
        sx={{
          position: "absolute",
          inset: "-30%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,0,139,.35), transparent 45%), radial-gradient(circle at 70% 70%, rgba(255,255,255,.10), transparent 48%)",
          filter: "blur(28px)",
          animation: "floatGlow 6s ease-in-out infinite",
        }}
      />

      {/* content */}
      <Box sx={{ position: "relative", width: "min(980px, 92vw)", px: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "46px", md: "92px" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          ABLA.CODEUR
        </Typography>

        <Typography sx={{ mt: 2, opacity: 0.8, letterSpacing: "0.06em" }}>
          Good day! It's nice to see you here ...
        </Typography>

        {/* cinematic bar */}
        <Box
          sx={{
            mt: 3,
            height: 10,
            borderRadius: 999,
            background: "rgba(255,255,255,.10)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "42%",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(255,0,139,.95), rgba(255,255,255,.55), rgba(255,0,139,.95))",
              transform: "translateX(-120%)",
              animation: "barMove 1.2s ease-in-out infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.08) 50%, transparent 100%)",
              transform: "translateX(-110%)",
              animation: "barGlow 1.2s ease-in-out infinite",
            }}
          />
        </Box>
      </Box>

      <style>
        {`
          @keyframes barMove{
            0%{ transform: translateX(-120%); }
            55%{ transform: translateX(160%); }
            100%{ transform: translateX(160%); }
          }
          @keyframes barGlow{
            0%{ transform: translateX(-110%); }
            55%{ transform: translateX(150%); }
            100%{ transform: translateX(150%); }
          }
          @keyframes floatGlow{
            0%,100%{ transform: translate(0,0) scale(1); }
            50%{ transform: translate(14px, 10px) scale(1.03); }
          }
        `}
      </style>
    </Box>
  );
}
