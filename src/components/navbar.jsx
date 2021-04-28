// import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <div className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{"  "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </div>
  );
};

export default Navbar;
