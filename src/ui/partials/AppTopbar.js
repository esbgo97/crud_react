import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const AppTopbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>React Demo App</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppTopbar;
