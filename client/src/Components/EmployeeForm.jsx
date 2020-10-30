import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import MainBg from "./MainBg";

function EmployeeForm() {
  const [gender, setGender] = useState("male");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data.get("salary"));
  };

  return (
    <MainBg>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="name">Employee Name</InputLabel>
            <Input id="name" type="text" name="name" />
          </FormControl>
          <FormControl>
            <InputLabel id="department">Age</InputLabel>
            <Select
              labelId="department"
              id="department-helper"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              name="department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Human Resource"}>Human Resource</MenuItem>
              <MenuItem value={"Technical"}>Technical</MenuItem>
              <MenuItem value={"Public Relation"}>Public Relation</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <TextField
              id="date"
              label="Joining Date"
              type="date"
              defaultValue="2020-05-24"
              name="joiningDate"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl>
            <TextField id="salary" label="Salary" type="text" name="salary" />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="image">Employee Image</InputLabel>
            <Input type="file" name="image" />
          </FormControl>
        </FormGroup>
        <Button type="submit">Add</Button>
      </form>
    </MainBg>
  );
}

export default EmployeeForm;
