import { FormControl, TextField } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  background: #fff;
  width: 330px;
  position: absolute;
  top: 21%;
`;
function SearchContainer() {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const { auth } = useSelector((state) => state);
  const handleChange = (e) => {
    setName(e.target.value);
    try {
      setResult([]);
      name &&
        Axios.get(`http://localhost:5000/api/employee/findByName/${name}`, {
          headers: {
            Authorization: `Bearer ${auth.authToken}`,
          },
        })
          .then((res) => res.data)
          .then((res) => setResult(res.employee));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <FormControl>
        <TextField
          type="text"
          variant="outlined"
          label="Search"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <div className="box">
        {result &&
          result.map((user) => (
            <div className="card" key={user.id}>
              <div className="top">
                <img
                  src={user.image || "/logo192.png"}
                  alt="lgogo"
                  style={{ width: 40 }}
                />
                <span>{user.name}</span>
              </div>
              <div className="bottom">
                <p>
                  Payment :{" "}
                  {user["payments"] &&
                    user.payments.reduce((a, b) => a + parseInt(b.amount), 0)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
}

export default SearchContainer;
