import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFrom from "../Components/LoginFrom";
import RegisterFrom from "../Components/RegisterForm";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoutes";
function MainRoutes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Home>
            <LoginFrom></LoginFrom>
          </Home>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <Home>
            <LoginFrom></LoginFrom>
          </Home>
        )}
      />
      <Route
        path="/register"
        render={() => (
          <Home>
            <RegisterFrom />
          </Home>
        )}
      />
      <PrivateRoutes path="/dashboard"></PrivateRoutes>
    </Switch>
  );
}

export default MainRoutes;
