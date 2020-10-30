import React from "react";
import { Route, Switch } from "react-router-dom";
import EmployeeForm from "../Components/EmployeeForm";
import Employees from "../Components/Employees";
import LoginFrom from "../Components/LoginFrom";
import Navigation from "../Components/Navigation";
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
      <PrivateRoutes path="/dashboard">
        <Navigation />
        <Switch>
          <Route path="/dashboard" exact render={() => <Employees />} />
          <Route path="/dashboard/add" render={() => <EmployeeForm />} />
        </Switch>
      </PrivateRoutes>
    </Switch>
  );
}

export default MainRoutes;
