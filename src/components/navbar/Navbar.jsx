import React from "react";
import "../../index.css";
import "./nav.scss";

const Navbar = () => {
  return (
    <navbar>
      <div className="content">
        <div></div>
        <ul>
          <li>HOME</li>
          <li>ARTICLES</li>
          <li>AUDIO</li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
