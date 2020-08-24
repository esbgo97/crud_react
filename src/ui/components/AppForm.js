import React, { Component } from "react";
import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class AppForm extends Component {
  state = {
    dataForm: {},
  };

  onChangeInput = (name, value) => {
    let dataForm = this.state.dataForm;
    dataForm[name] = value;
    this.setState({ dataForm });
  };

  render() {
    const {
      title,
      description,
      fields,
      maxWidth,
      show,
      onAccept,
      onCancel,
    } = this.props;

    const { dataForm } = this.state;

    return (
      <Dialog
        open={show}
        onClose={this.onShowModal}
        maxWidth={maxWidth ?? "lg"}
      >
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          {description && <DialogContentText>{description}</DialogContentText>}
          {fields.map((field, i) => (
            <div key={i}>
              {this.renderField(field, i)}
              <br />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onAccept(dataForm)} color="primary">
            ACCEPT
          </Button>
          <Button onClick={onCancel} color="secondary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <TextField
            label={field.label}
            name={field.name}
            type={field.type}
            onChange={(ev) => this.onChangeInput(field.name, ev.target.value)}
            fullWidth
          />
        );
      case "date":
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label={field.label}
              name={field.name}
              showTodayButton
              fullWidth
              onChange={(val) => this.onChangeInput(field.name, val)}
            />
          </MuiPickersUtilsProvider>
        );
      case "select":
        return (
          <FormControl fullWidth>
            <InputLabel id={"slt" + field.name}>{field.label}</InputLabel>
            <Select
              labelId={"slt" + field.name}
              name={field.name}
              onChange={(ev) => this.onChangeInput(field.name, ev.target.value)}
              value={field.options[0]}
            >
              {field.options.map((opt) => (
                <MenuItem value={opt} key={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      default:
        return <span>Not defined {field.type}</span>;
    }
  };
}
