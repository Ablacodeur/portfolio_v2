import React from "react";
import { Box, Button, Modal, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import my_logo from "/assets/projects/TheLogo.png";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%", height: "10vh", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: 6 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={my_logo}
            alt="logo"
            sx={{ width: "90px", height: "auto" }}
          />
        </Box>

        {/* DESKTOP MENU */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          <Button component={Link} to="/" variant="text">
            Home
          </Button>

          <Button component={Link} to="/works" variant="text">
            Works
          </Button>

          <Button component={Link} to="/about" variant="text">
            About Me
          </Button>
        </Stack>

        {/* MOBILE HAMBURGER */}
        <IconButton
          onClick={handleOpen}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* MOBILE MODAL FULLSCREEN */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "",
            backdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
            px: 3,
            pt: 2,
          }}
        >
          {/* TOP BAR */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component={Link} to="/" onClick={handleClose}>
              <Box
                component="img"
                src={my_logo}
                sx={{ width: "90px" }}
              />
            </Box>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* LINKS CENTER */}
          <Stack
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 3,

            }}
          >
            <Button
              component={Link}
              to="/"
              onClick={handleClose}
              sx={{ fontSize: {xs:'35px',md:'26px'} ,textDecoration:'none',color:'#e49c96',fontFamily: "Corinthia",}}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/works"
              onClick={handleClose}
              sx={{ fontSize: {xs:'35px',md:'26px'} ,textDecoration:'none',color:'#e49c96',fontFamily: "Corinthia",}}
            >
              Works
            </Button>

            <Button
              component={Link}
              to="/about"
              onClick={handleClose}
              sx={{ fontSize: {xs:'35px',md:'26px'},textDecoration:'none',color:'#e49c96',fontFamily: "Corinthia", }}
            >
              About Me
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}