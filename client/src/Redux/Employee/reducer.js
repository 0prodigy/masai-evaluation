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
        loading: false,
        errMsg: payload,
      };
    case GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: payload.message,
        employee: payload.employees.data,
        totalPage: payload.employees.totalPage,
      };
    case ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        errMsg: payload.message,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        errMsg: payload.message,
      };
    default:
      return state;
  }
};

export default reducer;
