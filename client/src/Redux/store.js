import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import authReducer from "./Auth/reducer";
import employeeReducer from "./Employee/reducer";
import thunk from "redux-thunk";

let composeEnhancers = compose;

let reducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
});

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
