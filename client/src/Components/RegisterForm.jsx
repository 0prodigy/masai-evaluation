import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@material-ui/core";
function RegisterFrom() {
  const formData = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
  };
  return (
    <div>
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
