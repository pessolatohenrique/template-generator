import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import { MenuList, MenuItem } from "../interfaces/Menu";

const menuList: MenuList = {
  items: [
    {
      table: "autores",
      link: "autores",
      icon: <PeopleIcon />,
    },
    {
      table: "livros",
      link: "livros",
      icon: <BookIcon />,
    },
  ],
};

function AppBarWrapper() {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen(): void {
    setOpen(true);
  }

  function handleDrawerClose(): void {
    setOpen(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project name
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            {menuList.items.map((item: MenuItem, key) => (
              <ListItem button key={key}>
                {<ListItemIcon>{item.icon}</ListItemIcon>}
                <Button size="small" color="primary" href={`/${item.link}`}>
                  {item.table}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Box>
  );
}

export default AppBarWrapper;
