import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Auth/action";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
`;

function LoginFrom() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
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
    <Wrapper>
      <h2>Login</h2>
      <h4 style={{ color: "red" }}>{auth.errMsg && auth.errMsg}</h4>
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
      <p>
        Don't have an account <Link to="/register">Register Here!!</Link>
      </p>
    </Wrapper>
  );
}

export default LoginFrom;
