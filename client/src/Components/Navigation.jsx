import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 2px 0px 5px #f6f7f9;
  background: #fff;
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
  }
  a {
    padding: 10px 20px;
  }
`;
function Navigation() {
  return (
    <Wrapper>
      <div className="row">
        <div className="left">
          <img src="/logo192.png" alt="logo" style={{ width: 30 }} />
        </div>
        <div className="center">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/add">Add Employee</Link>
        </div>
        <div className="right">
          <div className="row">
            <div>
              <img src="/logo192.png" alt="avatar" style={{ width: 30 }} />
            </div>
            <div>
              <h4 onClick={() => window.location.reload()}>Logout</h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navigation;
