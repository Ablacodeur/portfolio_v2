import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import CircleLoader from "react-spinners/CircleLoader";
import { useLoading } from "./Context/LoadingContext";

function App() {
  const { isLoading } = useLoading();


  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        backgroundColor:'#F8F8FF',
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