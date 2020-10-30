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
import { Redirect, useHistory } from "react-router-dom";
function RegisterFrom() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
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
    </div>
  );
}

export default RegisterFrom;
