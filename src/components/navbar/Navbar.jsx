import React,{useState} from "react";
import "../../index.css";
import "./nav.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const onHandleClick = () => {
    setClicked(!clicked);
  };
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
      <div className='menu-icon' onClick={onHandleClick}>
        <i className={clicked ?'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </navbar>
  );
};

export default Navbar;
