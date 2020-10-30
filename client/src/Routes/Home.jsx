import React from "react";
// import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function Home({ children, ...rest }) {
  const state = { isAuth: true };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !state.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Home;
