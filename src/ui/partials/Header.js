import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Typography>CRUD App</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
