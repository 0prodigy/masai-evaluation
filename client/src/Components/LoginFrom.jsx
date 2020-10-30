import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Auth/action";
function LoginFrom() {
  const dispatch = useDispatch();
  const formData = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(loginUser(user));
  };
  return (
    <div>
      <form onSubmit={formData}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" type="text" name="email" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="passowrd">Password</InputLabel>
            <Input id="passowrd" type="password" name="password" />
          </FormControl>
        </FormGroup>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginFrom;
