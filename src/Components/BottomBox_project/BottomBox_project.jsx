import { Box, Typography, useMediaQuery } from "@mui/material";

export default function BottomBox_project({text1, text2,text3}) {
    const isMobile = useMediaQuery("(max-width:1030px)");
  return (
    <Box
    sx={{
        width: "100%",
        mt: {xs:1,md:'4'},
        display: "flex",
        gap: {xs:2,md:'4'},
        alignItems: {xs:'normal',md:'center'}, 
        flexDirection:isMobile? 'column':'row',
        marginBottom:{xs:'5px',md:'none'},

    }}
    >
    {/* LEFT */}
    <Box sx={{ minWidth: "260px"}}>
        <Typography
        sx={{
            fontSize: isMobile? "35px": "30px",
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
        display:isMobile ?'none':'flex'
        }}
    />


    {/* RIGHT */}
        <Box sx={{ maxWidth: isMobile?'100%':'520px'}}>
        <Typography
        sx={{
            color: "text.secondary",
            textAlign:isMobile? 'end':'justify',
            textJustify: "inter-word",
            lineHeight: 1.8,
            textAlign:{xs:'end',md:'justify' },
        }}
        >
            {text3}        
        </Typography>
    </Box>

    </Box>

  );
} 
