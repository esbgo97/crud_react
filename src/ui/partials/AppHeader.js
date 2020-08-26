import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const AppHeader = (props) => {
  return (
    <Grid container>
      <Grid item md={10}>
        <Typography variant="h4">{props.title}</Typography>
      </Grid>
    </Grid>
  );
};

const mapState = (state) => {
  return {
    title: state.ui.title,
  };
};

export default connect(mapState)(AppHeader);
