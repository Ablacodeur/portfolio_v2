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
        mt: {xs:'0',md:'2'},
        display: "flex",
        gap: 2,
        alignItems: {xs:'normal',md:'center'}, 
        flexDirection:{xs:'column',md:'row'},
        marginBottom:{xs:'0px',md:'none'},

    }}
    >
    {/* LEFT */}
    <Box sx={{ minWidth: "260px" }}>
        <Typography sx={{ fontSize: "18px", mb: 1 }}>
        Abla&apos;s
        </Typography>

        <Typography
        sx={{
            fontSize: { xs: "42px", md: "50px" },
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
        transform: "translateY(20px)", 
        display:{xs:'none',md:'flex'}

        }}
    />


    {/* RIGHT */}
    <Box sx={{ minWidth: 360 ,textAlign:{xs:'end',md:'justify'},
    display:'flex',alignItems:'flex-end',flexDirection:'column',mb:'0.5' }}>
        <Typography sx={{ fontStyle: "italic", fontWeight: 700 }}>
        Let’s Craft Something Exceptional.
        
        </Typography>

    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 ,alignContent:'flex-end' }}>

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
        sx={{ width: {xs:'35px',md:'50px'}, height: {xs:'35px',md:'50px'}, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
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
        sx={{ width: {xs:'35px',md:'50px'}, height: {xs:'35px',md:'50px'}, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
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
        sx={{ width: {xs:'35px',md:'50px'}, height: {xs:'35px',md:'50px'}, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
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
        sx={{ width: {xs:'35px',md:'50px'}, height: {xs:'35px',md:'50px'}, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
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
        sx={{ width: {xs:'35px',md:'50px'}, height: {xs:'35px',md:'50px'}, objectFit: "contain", cursor: "pointer" ,transition: "transform 0.3s ease",
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
