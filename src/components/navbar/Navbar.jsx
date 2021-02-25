import React from "react";
import "../../index.css";
import "./nav.scss";
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  return (
    <navbar>
      <div className="content">
        <div>
         
        </div>
        <ul>
          <li>HOME</li>
          <li>ARTICLES</li>
          <li>AUDIO</li>
        </ul>
      </div>
      <i  className='btn'><FaBars/></i>
    </navbar>
  );
};

export default Navbar;
