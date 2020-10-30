import {
  GETALL_FAILURE,
  GETALL_SUCCESS,
  EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_REQUEST,
} from "./actionTypes";
import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:5000/api/employee",
  headers: {
    "content-type": "application/json",
  },
});

const getAllEmployee = (
  token,
  page = 1,
  limit = 10,
  order = 1,
  sort = "",
  fillter = {}
) => async (dispatch) => {
  dispatch({ type: EMPLOYEE_REQUEST, payload: "" });
  try {
    const res = await req
      .get(`/all?page=${page}&limit=${limit}&orderBy=${order}&sortBy=${sort}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          fillter: JSON.stringify(fillter),
        },
      })
      .then((res) => res.data);
    dispatch({ type: GETALL_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: GETALL_FAILURE, payload: err.response.data });
  }
};

const addEmployee = (token, data) => async (dispatch) => {
  dispatch({ type: ADD_REQUEST, payload: "" });
  try {
    const res = await req.post("/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ADD_EMPLOYEE_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: ADD_EMPLOYEE_FAILURE, payload: err.response.data });
  }
};

export { getAllEmployee, addEmployee };
