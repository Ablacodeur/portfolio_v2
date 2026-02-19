import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import bg from "../public/assets/projects/bg2.png"
import "./App.css";
function App() {

  return (
      <Box
        sx={{
          maxHeight: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
    <Navbar/>
    <Outlet></Outlet>
  </Box>
  )
}

export default App
