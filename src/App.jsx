import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import bg from '/assets/projects/bg.png'

function App() {

  return (
  <Box >
    <Navbar/>
    <Outlet></Outlet>
  </Box>
  )
}

export default App
