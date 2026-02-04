import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

function App() {

  return (
  <Box>
    <Navbar/>
    <Outlet></Outlet>
  </Box>
  )
}

export default App
