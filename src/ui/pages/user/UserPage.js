import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserPage extends Component {
//   userService = new UserService();
  state = {
    showModal: false,
    dataEdit: null,
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  onShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  onSave = (data) => {
    // this.userService.save(data);
    alert(data)
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Paper>
          <UserList onAdd={this.onShowModal} />
        </Paper>
        <Modal
          open={showModal}
          onClose={this.onShowModal}
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Paper>
            <UserForm onCancel={this.onCloseModal} onSave={this.onSave} />
          </Paper>
        </Modal>
      </Container>
    );
  }
}
