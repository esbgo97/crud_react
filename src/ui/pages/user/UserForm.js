import React, { Component } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import KeyboardDatePicker from "@material-ui/core";
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
    const { name, value } = event.target;
    let user = this.state.user;
    user[name] = value;
    this.setState({
      user,
    });
  };
  onSend = () => {
    this.props.onSave(this.state.user);
  };
  render() {
    return (
      <form>
        <Card style={{ width: 700, padding: 15 }}>
          <Typography variant="h4"> User Form</Typography>
          <br />
          <TextField
            label="Username"
            name="username"
            onChange={this.onChangeInput}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            onChange={this.onChangeInput}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            onChange={this.onChangeInput}
            fullWidth
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <br />
          <CardActions>
            <Button onClick={this.onSend} color="primary">
              SAVE
            </Button>
            <Button onClick={this.props.onCancel} color="secondary">
              CANCEL
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}
