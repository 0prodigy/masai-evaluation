import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from "./actionTypes";

const init = {
  isAuth: false,
  authToken: "",
  loading: false,
  errMsg: "",
  successMsg: "",
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, successMsg: payload.message };
    case REGISTER_FAILURE:
      return { ...state, loading: false, errMsg: payload.message };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: payload.message,
        isAuth: true,
        authToken: payload.accessToken,
      };

    case LOGIN_FAILURE:
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
