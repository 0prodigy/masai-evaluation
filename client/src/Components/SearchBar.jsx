import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllEmployee } from "../Redux/Employee/action";
import Pagination from "@material-ui/lab/Pagination";
const Wrapper = styled.div`
  padding: 20px;
  background: #fff;
  .row {
    display: flex;
    justify-content: space-around;
    aling-items: center;
    > * {
      display: block;
      min-width: 120px;
    }
  }
  .left ,.right{
      width:40%;
      flex:40%;
  }

  }
  .pagination {
    height: 100%;
    background: #304236;
    position: absolute;
    right: -40px;
    z-index: 9;
    width: 45px;
    border-top-right-radius: 20px;
    top: 0;
    border-bottom-right-radius: 20px;
    display:flex;
    align-items:center;

    .MuiPaginationItem-page {
        color:#fff;
        cursor:pointer;
    }
}
`;
function SearchBar() {
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState(1);
  const { auth, employee } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    if (gender && department) {
      dispatch(
        getAllEmployee(auth.authToken, page, limit, order, sort, {
          department: department,
          gender: gender,
        })
      );
    } else if (gender) {
      dispatch(
        getAllEmployee(auth.authToken, page, limit, order, sort, {
          gender: gender,
        })
      );
    } else if (department) {
      dispatch(
        getAllEmployee(auth.authToken, page, limit, order, sort, {
          department: department,
        })
      );
    } else {
      dispatch(getAllEmployee(auth.authToken, page, limit, order, sort));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [department, gender, order, sort, page, limit]);
  return (
    <Wrapper>
      <div className="row">
        <div className="left">
          <h3>Fillter By</h3>
          <div className="row">
            <FormControl>
              <InputLabel id="department">Department</InputLabel>
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
            </FormControl>
            <FormControl>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender-helper"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="center">
          <h3>Set Data Limit</h3>
          <div className="row">
            <FormControl>
              <Input
                type="number"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
        <div className="right">
          <h3>Sort and Order</h3>
          <div className="row">
            <FormControl>
              <Select
                id="order-helper"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                name="order"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Ascending</MenuItem>
                <MenuItem value={-1}>Descending</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Select
                id="sort-helper"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                name="sort"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"department"}>Department</MenuItem>
                <MenuItem value={"salary"}>Salary</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="pagination">
        <Pagination
          count={employee.totalPage}
          color="primary"
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </Wrapper>
  );
}

export default SearchBar;
