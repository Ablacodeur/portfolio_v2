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
        alignItems: "center", 
    }}
    >
    {/* LEFT */}
    <Box sx={{ minWidth: "260px" }}>
        <Typography sx={{ fontSize: "18px", mb: 1 }}>
        Abla&apos;s
        </Typography>

        <Typography
        sx={{
            fontSize: { xs: "52px", md: "60px" },
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
        transform: "translateY(30px)", 
        
        }}
    />

    {/* RIGHT */}
    <Box sx={{ maxWidth: 520 }}>
        <Typography sx={{ fontStyle: "italic", fontWeight: 700, mb: 1 }}>
        “Turning ideas into reality through code is what I love most.”
        </Typography>

        <Typography
        sx={{
            color: "text.secondary",
            textAlign: "justify",
            textJustify: "inter-word",
            lineHeight: 1.2,
        }}
        >
        There’s something powerful about starting with a vision and shaping it into a real, working product. Each line of code teaches me patience, resilience, and creativity. 
        I’m deeply grateful for this passion that allows me to constantly learn, build, and express myself through technology.
        </Typography>
    </Box>
    </Box>

  );
}
