import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start">
          <MenuIcon />
        </IconButton> */}
        <Typography>Users Demo App</Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};
