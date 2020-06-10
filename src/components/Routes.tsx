import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./auths/Login";
import Register from "./auths/Register";
import Home from "./layouts/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
