import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar flex">
      <img src={logo} alt="logo" />
      <button id="course">Courses</button>
    </div>
  );
};

export default Navbar;
