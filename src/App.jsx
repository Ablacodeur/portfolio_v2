import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import "./App.css";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const bgUrl = isMobile
    ? "/assets/projects/bg-mobile.png"
    : "/assets/projects/bg2.png";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;