import React from "react";
// import { connect } from "react-redux";
import Container from "@material-ui/core/Container";

import AppTopbar from "../partials/AppTopbar";
import AppHeader from "../partials/AppHeader";

const BasicTemplate = (props) => {
  return (
    <>
      <AppTopbar name="Demo App" />
      <Container>
        <AppHeader />
        <br />
        {props.children}
        {/* <AppFooter />
      <AppModal /> */}
      </Container>
    </>
  );
};
// const mapState = (state) => {
//   return {};
// };
export default BasicTemplate;
