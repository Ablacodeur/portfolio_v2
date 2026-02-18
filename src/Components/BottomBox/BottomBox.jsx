import { Box, Typography } from "@mui/material";

export default function BottomBox() {
  return (
    <Box
    sx={{
        width: "100%",
        mt: 2,
        px: { xs: 2, md: 6 },
        display: "flex",
        gap: 4,
        alignItems: "baseline", // ✅ aligne sur la base du gros texte
    }}
    >
    {/* LEFT */}
    <Box sx={{ minWidth: "260px" }}>
        <Typography sx={{ fontSize: "18px", mb: 1 }}>
        Abla&apos;s
        </Typography>

        <Typography
        sx={{
            fontSize: { xs: "52px", md: "80px" },
            fontWeight: 900,
            lineHeight: 1.05,
        }}
        >
        Work
        </Typography>
    </Box>

    {/* LINE */}
    <Box
        sx={{
        flex: 1,
        height: "1px",
        backgroundColor: "rgba(0,0,0,0.35)",
        transform: "translateY(90px)", // ✅ ajuste finement si besoin
        
        }}
    />

    {/* RIGHT */}
    <Box sx={{ maxWidth: 520 }}>
        <Typography sx={{ fontStyle: "italic", fontWeight: 700, mb: 1 }}>
        “Working and learning code has...”
        </Typography>

        <Typography
        sx={{
            color: "text.secondary",
            textAlign: "justify",
            textJustify: "inter-word",
            lineHeight: 1.8,
        }}
        >
        Haha, I really meant it. Every journey brings me joy and priceless
        lessons. I’m grateful to meet all the people that I have met, and I’m so
        excited to meet amazing people out there.
        </Typography>
    </Box>
    </Box>

  );
}
