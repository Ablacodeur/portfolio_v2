import { Box, Typography } from "@mui/material";
import cv_logo from '../../public/assets/projects/cv_logo.png'
import github_logo from '../../public/assets/projects/github_logo.png'
import mail_logo from '../../public/assets/projects/mail_logo.png'
import linkdin_logo from '../../public/assets/projects/linkdin_logo.png'
import whatsapp_logo from '../../public/assets/projects/whatsapp_logo.png'


export default function BottomBox_about({text1, text2,text3}) {
  return (
    <Box
    sx={{
        width: "100%",
        mt: 4,
        display: "flex",
        gap: 4,
        alignItems: "flex-start", 
    }}
    >
    {/* LEFT */}
    <Box sx={{ minWidth: "260px" }}>
        <Typography sx={{ fontSize: "18px", mb: 1 }}>
        Abla&apos;s
        </Typography>

        <Typography
        sx={{
            fontSize: { xs: "52px", md: "50px" },
            fontWeight: 900,
            lineHeight: 1.05,
        }}
        >
        Information
        </Typography>
    </Box>

    {/* LINE */}
    <Box
        sx={{
        flex: 1,
        height: "1px",
        backgroundColor: "rgba(0,0,0,0.35)",
        transform: "translateY(70px)", 
        
        }}
    />


    {/* RIGHT */}
    <Box sx={{ minWidth: 360}}>
        <Typography sx={{ fontStyle: "italic", fontWeight: 700, mb: 1 }}>
        Let’s Craft Something Exceptional.
        
        </Typography>

    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 6 }}>

    {/* EMAIL */}
    <Box
        component="a"
        href="mailto:ablacodeur@gmail.com"
        sx={{ display: "inline-block" }}
    >
        <Box
        component="img"
        
        src={mail_logo}
        alt="Email"
        sx={{ width: 50, height: 50, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
        "&:hover": {
        transform: "scale(1.15)",
        }}}
        />
    </Box>

    {/* GITHUB */}
    <Box
        component="a"
        href="https://github.com/Ablacodeur"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Box
        component="img"
        src={github_logo}
        alt="GitHub"
        sx={{ width: 50, height: 50, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
        "&:hover": {
        transform: "scale(1.15)",
        }}}

        />
    </Box>

    {/* LINKEDIN */}
    <Box
        component="a"
        href="https://www.linkedin.com/in/victoire-agboli"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Box
        component="img"
        src={linkdin_logo}
        alt="LinkedIn"
        sx={{ width: 50, height: 50, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
        "&:hover": {
        transform: "scale(1.15)",
        }}}

        />
    </Box>

    {/* WHATSAPP */}
    <Box
        component="a"
        href="https://wa.me/15142628032"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Box
        component="img"
        src={whatsapp_logo}
        alt="WhatsApp"
        sx={{ width: 50, height: 50, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
        "&:hover": {
        transform: "scale(1.15)",
        }}}

        />
    </Box>

    {/* CV DOWNLOAD */}
    <Box
        component="a"
        href="/CV_Victoire_Agboli_FullStack_Canada.pdf"
        download
    >
        <Box
        component="img"
        src={cv_logo}
        alt="Download CV"
        sx={{ width: 50, height: 50, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
        "&:hover": {
        transform: "scale(1.15)",
        }}}

        />
    </Box>

    </Box>   
 </Box>
    </Box>

  );
} 
