import React, { Component } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import UserService from "../../../services/UserService";

export default class User extends Component {
  userServ = new UserService();
  state = {
    user: {
      Username: "",
      Password: "",
    },
  };

  onChangeInput = (event) => {
    console.log(event);
    // const {prop, val} = event.target
    // let user = this.state.user;
    // user[prop] = val;
    // this.setState({
    //   user,
    // });
  };
  onSend = () => {
    alert(JSON.stringify(this.state));
    // const credentials = this.userServ.S;
  };
  render() {
    return (
      <form>
        <br />
        <Card style={{ width: 500 }}>
          <Typography variant="h4"> User Form</Typography>
          <br />
          <TextField label="Username" onChange={this.onChangeInput} fullWidth/>
          <TextField label="Password" type="password" fullWidth  />
          <br />
          <CardActions>
            <Button onClick={this.onSend}>SAVE</Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}
