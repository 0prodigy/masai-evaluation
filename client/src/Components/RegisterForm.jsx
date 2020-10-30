import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Auth/action";
import { Link, Redirect, useHistory } from "react-router-dom";
function RegisterFrom() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const history = useHistory();
  const formData = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let user = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(registerUser(user));
  };
  return (
    <div>
      {!state.errMsg && state.successMsg && (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: history.location },
          }}
        />
      )}
      <h2>Register</h2>
      <h4 style={{ color: "red" }}>{state.errMsg && state.errMsg}</h4>
      <form onSubmit={formData}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" name="name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" type="text" name="email" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="passowrd">Password</InputLabel>
            <Input id="passowrd" type="password" name="password" />
          </FormControl>
        </FormGroup>
        <Button type="submit">Register</Button>
      </form>
      <p>
        Already have an account <Link to="/login">Login Here!!</Link>
      </p>
    </div>
  );
}

export default RegisterFrom;
