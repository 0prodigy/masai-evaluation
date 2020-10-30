import {
  GETALL_FAILURE,
  GETALL_SUCCESS,
  EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_REQUEST,
} from "./actionTypes";

const init = {
  loading: false,
  employee: [],
  errMsg: "",
  successMsg: "",
  totalPage: 0,
  currentPage: 0,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETALL_FAILURE:
      return {
        ...state,
        loading: true,
        errMsg: payload,
      };
    case GETALL_SUCCESS:
      return {
        ...state,
        loading: true,
        successMsg: payload.message,
        employee: payload.employees.data,
        totalPage: payload.employees.totalPage,
      };
    default:
      return state;
  }
};

export default reducer;
