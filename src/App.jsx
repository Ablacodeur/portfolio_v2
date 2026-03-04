import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import "./App.css";

function App() {
  // ✅ Breakpoints simples (mobile / tablette / desktop)
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1200px)");

  const bgUrl = isMobile
    ? "/assets/projects/bg-small-2.png"
    : isTablet
    ? "/assets/projects/bg-tablet.png" 
    : "/assets/projects/bg2.png";

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* ✅ seul endroit qui scroll */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0, // ✅ CRUCIAL pour que le scroll marche en flex
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;