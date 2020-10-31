import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Payment() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("2020-05-13");
  const [employee, setEmployee] = useState([]);
  const { auth } = useSelector((state) => state);
  const [msg, setMsg] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      let res = await Axios.post(
        "http://localhost:5000/api/employee/addPayment",
        {
          id,
          amount,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.authToken}`,
          },
        }
      ).then((res) => res.data);
      setMsg(res.message);
    } catch (err) {
      setMsg(err.response.data.message);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let res = await Axios.get(
          `http://localhost:5000/api/employee/all?limit=1000`,
          {
            headers: {
              Authorization: `Bearer ${auth.authToken}`,
            },
          }
        ).then((res) => res.data);
        setEmployee(res.employees.data);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ padding: 20, background: "white" }}>
      <p>{msg && msg}</p>
      <form
        onSubmit={handlePayment}
        style={{ display: "flex", justifyContent: "space-around" }}
        className="paymentForm"
      >
        <FormControl>
          <InputLabel id="employee">Employee</InputLabel>
          <Select
            labelId="employee"
            id="employee-helper"
            value={id}
            onChange={(e) => setId(e.target.value)}
            name="id"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {employee &&
              employee?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="date"
            label="Payment Date"
            type="date"
            value={date}
            name="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Pay Now</Button>
      </form>
    </div>
  );
}

export default Payment;
