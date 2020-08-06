import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import UserForm from './UserForm'
import UserList from './UserList'

export default class UserPage extends Component {
  render() {
    return (
      <Paper>
        <UserForm />
        <UserList />
      </Paper>
    );
  }
}
