import { Box, Typography } from "@mui/material";

export default function BottomBox_project({text1, text2,text3}) {
  return (
    <Box
    sx={{
        width: "100%",
        mt: {xs:1,md:'4'},
        display: "flex",
        gap: {xs:2,md:'4'},
        alignItems: {xs:'normal',md:'center'}, 
        flexDirection:{xs:'column',md:'row'},
        marginBottom:{xs:'5px',md:'none'},

    }}
    >
    {/* LEFT */}
    <Box sx={{ maxWidth: "260px"}}>
        <Typography
        sx={{
            fontSize: { xs: "35px", md: "30px" },
            fontWeight: 900,
            lineHeight: 1.8,
        }}
        >
        {text1}
        </Typography>
    </Box>

    {/* LINE */}
    <Box
        sx={{
        flex: 1,
        height: "1px",
        backgroundColor: "rgba(0,0,0,0.35)",
        transform: "translateY(20px)", 
        display:{xs:'none',md:'flex'}
        }}
    />


    {/* RIGHT */}
        <Box sx={{ maxWidth: "520px"}}>
        <Typography
        sx={{
            color: "text.secondary",
            textAlign: "justify",
            textJustify: "inter-word",
            lineHeight: 1.8,
            textAlign:{xs:'end',md:'justify' }
        }}
        >
            {text3}        
        </Typography>
    </Box>

    </Box>

  );
} 
