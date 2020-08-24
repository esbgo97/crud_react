import React, { Component } from "react";
import moment from "moment";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import AppTable from "../../components/AppTable";
import AppForm from "../../components/AppForm";
import { green } from "@material-ui/core/colors";

import { DATE_FORMATS } from "../../../utils/constants";
export default class UserPage extends Component {
  //   userService = new UserService();
  state = {
    showForm: false,
    dataEdit: null,
    users: [
      {
        id: 1,
        username: "edw",
        email: "ebustos@gmail.com",
        gender: "Male",
        birth: moment().format(DATE_FORMATS.default),
      },
      {
        id: 2,
        username: "nata",
        email: "nata@gmail.com",
        gender: "Female",
        birth: moment().format(DATE_FORMATS.default),
      },
    ],
  };

  onSave = (user) => {
    let users = this.state.users;
    user.birth = new Date().toDateString();
    user.id = users.length + 1;
    users.push(user);
    this.setState({
      users,
      showForm: false,
    });
  };

  onShowModal = () => {
    this.setState({ showForm: true });
  };
  onCancel = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { users, showForm } = this.state;
    const fields = [
      { label: "Username", name: "username", type: "text" },
      { label: "Email", name: "email", type: "email" },
      { label: "Birth", name: "birth", type: "date" },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: ["Indeterminate", "Male", "Female"],
      },
    ];
    const cols = ["id", "username", "email", "birth", "gender"];
    return (
      <Container>
        <Card style={{ padding: 10 }}>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h4" color="primary">
                User List
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={this.onShowModal}>
                <AddIcon style={{ color: green[500] }} />
              </IconButton>
            </Grid>
          </Grid>
          <CardContent>
            <AppTable
              title="User List"
              description="Current Users registered on the App"
              items={users}
              cols={cols}
            />
          </CardContent>
        </Card>
        <AppForm
          show={showForm}
          title="User Form"
          description="Complete the form to create a new user."
          fields={fields}
          onAccept={this.onSave}
          onCancel={this.onCancel}
        />
      </Container>
    );
  }
}
