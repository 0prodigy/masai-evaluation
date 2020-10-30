import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import EmployeeForm from "../Components/EmployeeForm";
import Employees from "../Components/Employees";
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
      <PrivateRoutes path="/dashboard">
        <Switch>
          <Route path="/dashboard" exact render={() => <Employees />} />
          <Route path="/dashboard/add" render={() => <EmployeeForm />} />
        </Switch>
        <Link to="/dashboard/add">Add</Link>
      </PrivateRoutes>
    </Switch>
  );
}

export default MainRoutes;
