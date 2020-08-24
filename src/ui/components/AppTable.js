import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { red, blue } from "@material-ui/core/colors";

export default class AppTable extends Component {
  render() {
    const { items, cols } = this.props;
    return (
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ACTIONS</TableCell>
              {cols.map((col, i) => (
                <TableCell key={i}>{col.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.username}>
                <TableCell>
                  <IconButton>
                    <EditIcon style={{ color: blue[500] }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ color: red[500] }} />
                  </IconButton>
                </TableCell>
                {cols.map((col, i) => (
                  <TableCell key={i}>{row[col]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={items.length + 1}
              count={items.length}
              rowsPerPage={5}
              page={0}
              onChangePage={() => {}}
              onChangeRowsPerPage={() => {}}
            />
          </TableFooter> */}
        </Table>
      </TableContainer>
    );
  }
}
