import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoutes({ children, ...rest }) {
  const state = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoutes;
