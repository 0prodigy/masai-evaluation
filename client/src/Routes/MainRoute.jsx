import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoutes";
function MainRoutes() {
  return (
    <Switch>
      <Home path="/" exact>
        <h1>Hello</h1>
      </Home>
      <PrivateRoutes path="/dashboard"></PrivateRoutes>
    </Switch>
  );
}

export default MainRoutes;
