import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import MainBg from "../Components/MainBg";

const Wrapper = styled.div``;

function Home({ children, ...rest }) {
  const state = useSelector((state) => state.auth);
  return (
    <Wrapper>
      <Route
        {...rest}
        render={({ location }) =>
          !state.isAuth ? (
            <MainBg>{children}</MainBg>
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
    </Wrapper>
  );
}

export default Home;
