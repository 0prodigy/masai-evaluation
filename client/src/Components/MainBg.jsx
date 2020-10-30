import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .row {
    display: flex;
    height: 100vh;

    .col-md-4 {
      width: 30%;
      height: 100%;
      flex: 30%;
    }
    .col-md-8 {
      width: 70%;
      height: 100%;
      flex: 70%;
      postition: relative;
    }
    .bg-dark {
      background: #304236;
    }
    .bg-light {
      background: #f9f9f9;
    }

    .offset-box {
      background: #fff;
      padding: 20px;
      position: absolute;
      top: 20%;
      left: 30%;
      transform: translate(-30%, 20%);
      box-shadow: 0px 0px 5px rgb(62 62 62 / 75%);
      border-radius: 10px;
      color: #304236;
    }
  }
`;

function MainBg({ children }) {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-4 bg-light"></div>
        <div className="col-md-8 bg-dark">
          <div className="offset-box">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainBg;
