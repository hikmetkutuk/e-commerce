import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/root/Home";
import Login from "../components/auth/Login";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/admin" component={Home} />
      <Route exact path="/admin/login" component={Login} />
    </Switch>
  );
};

export default Router;
