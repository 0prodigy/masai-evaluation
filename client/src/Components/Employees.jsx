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
import styled from "styled-components";
const Wrapper = styled.div`
  background: #f5f7f9;
  padding: 20px;
  .table-container {
    width: 700px;
    margin: 50px auto;
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
  return (
    <Wrapper>
      <TableContainer component={Paper} className="table-container">
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
            <TableRow>
              <TableCell>
                <img
                  src="/logo192.png"
                  alt="lgo"
                  style={{ width: 60, borderRadius: 10 }}
                />{" "}
              </TableCell>
              <TableCell className="name">Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  src="/logo192.png"
                  alt="lgo"
                  style={{ width: 60, borderRadius: 10 }}
                />{" "}
              </TableCell>
              <TableCell className="name">Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}

export default Employees;
