import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from "./actionTypes";
import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: {
    "content-type": "application/json",
  },
});

const registerUser = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST, payload: "Register" });
  try {
    const res = await auth
      .post("/register", { ...data })
      .then((res) => res.data);
    dispatch({ type: REGISTER_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err.response.data });
  }
};

const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: "LOGIN" });
  try {
    const res = await auth.post("/login", data).then((res) => res.data);

    dispatch({ type: LOGIN_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err });
  }
};

export { registerUser, loginUser };
