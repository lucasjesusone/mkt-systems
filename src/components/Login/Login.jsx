import React from "react";
import { FiPlus } from "react-icons/fi";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

import "../Login/login.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="logins">
        <button>Sign up</button>

        <button>Login</button>
      </div>

      <div className="icons">
        <span>
          <FcBusinessman />
        </span>
        <span>
          <FcBusinesswoman />
        </span>
      </div>

      <div className="fields">
        <div>
          <input type="text" name="name" placeholder="Seu nome" />
        </div>

        <div>
          <input type="text" name="email" placeholder="Seu nome" />
        </div>

        <div>
          <input placeholder="Quais seus interesses?"></input>
        </div>
        <div className="button">
          <FiPlus id="plusIcon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
