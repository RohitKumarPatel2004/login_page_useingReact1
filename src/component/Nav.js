import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-1">
        <div className="cont-1">
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
