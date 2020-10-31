import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Payment from "./Payment";
import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
const Wrapper = styled.div`
  background: #f5f7f9;
  padding: 20px;
  position: relative;

  .table-container {
    width: 700px;
    min-heigt: 550px;
    margin: 50px auto;
    overflow: visible;
    position: relative;
  }
  .MuiTableCell-body {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.05rem;
    font-weight: 500;
  }
  .name {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

function Employees() {
  const { employee } = useSelector((state) => state);

  return (
    <Wrapper>
      <Payment />
      <SearchContainer />
      <TableContainer component={Paper} className="table-container">
        <SearchBar />
        <Table aria-label="Employee Tabel">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.employee &&
              employee.employee?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.image || "/logo192.png"}
                      alt="lgo"
                      style={{ width: 60, borderRadius: 10 }}
                    />{" "}
                  </TableCell>
                  <TableCell className="name">{item.name}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item["salary"] && item["salary"]}</TableCell>
                  <TableCell>
                    {item["payments"] &&
                      item.payments.reduce((a, b) => a + parseInt(b.amount), 0)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}

export default Employees;
