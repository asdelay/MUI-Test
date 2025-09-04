import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState, type ReactElement } from "react";
import ThemeHandler from "./ThemeHandler";
import LanguageHandler from "./LanguageHandler";

const HideOnScroll = ({ children }: { children: ReactElement<unknown> }) => {
  const trigger = useScrollTrigger();
  console.log(trigger);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const drawerWidth = 240;

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        Tour App
      </Typography>
      <Divider />
      <List>
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Typography variant="h6">Route 1</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Typography variant="h6">Route 2</Typography>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ThemeHandler />
            <LanguageHandler />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tour App
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
            >
              <ThemeHandler />
              <LanguageHandler />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </>
  );
};

export default NavBar;
