import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import BasicTemplate from "../templates/BasicTemplate";

import UserPage from "../pages/user/UserPage";
import HomePage from "../pages/main/HomePage";

const AppRouter = () => {
  const routes = [
    { path: "/", component: HomePage },
    { path: "/User", component: UserPage },
  ];

  return (
    <BasicTemplate>
      <Router>
        {routes.map((r) => (
          <Route path={r.path} component={r.component} exact/>
        ))}
      </Router>
    </BasicTemplate>
  );
};
export default AppRouter;
