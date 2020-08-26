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

  onAccept = (event) => {
    console.log(event);
  };

  render() {
    const {
      title,
      description,
      fields,
      maxWidth,
      show,
      onCancel,
    } = this.props;

    return (
      <form autoComplete="off" onSubmit={this.onAccept}>
        <Dialog
          open={show}
          onClose={this.onShowModal}
          maxWidth={maxWidth ?? "lg"}
        >
          <DialogTitle>{title}</DialogTitle>

          <DialogContent>
            {description && (
              <DialogContentText>{description}</DialogContentText>
            )}
            {fields.map((field, i) => (
              <div key={i}>
                {this.renderField(field, i)}
                <br />
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              ACCEPT
            </Button>
            <Button type="button" onClick={onCancel} color="secondary">
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }

  renderField = (field) => {
    const { dataForm } = this.state;
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <TextField
            label={field.label}
            name={field.name}
            type={field.type}
            value={dataForm[field.name] ?? ""}
            onChange={(ev) => this.onChangeInput(field.name, ev.target.value)}
            autoComplete="off"
            required
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
              value={dataForm[field.name] ?? null}
              fullWidth
              required
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
              value={dataForm[field.name] ?? -1}
              required
            >
              <MenuItem value={-1} key={-1}>
                -- Choose One
              </MenuItem>
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
