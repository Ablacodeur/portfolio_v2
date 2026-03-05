import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import CircleLoader from "react-spinners/CircleLoader";
import { useLoading } from "./Context/LoadingContext";

function App() {
  const { isLoading } = useLoading();

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
        // backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircleLoader color="#98B97F" size={90} />
        </Box>
      )}

      <Navbar />

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;