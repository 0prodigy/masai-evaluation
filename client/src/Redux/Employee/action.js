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
  order = 1,
  sort = {},
  fillter = {}
) => async (dispatch) => {
  dispatch({ type: EMPLOYEE_REQUEST, payload: "" });
  try {
    const res = await req
      .get("/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
    dispatch({ type: GETALL_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: GETALL_FAILURE, payload: err.response.data });
  }
};

export { getAllEmployee };
