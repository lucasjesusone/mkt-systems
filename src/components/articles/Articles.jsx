import React from "react";
import { VscWatch } from "react-icons/vsc";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";
import { GrDiamond } from "react-icons/gr";

import "../articles/articles.scss";

const Articles = () => {
  return (
    <div className="articles-content">
      <div className="services">
        <div>
          <p className="icon">
            <VscWatch />
          </p>
          <p className="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <HiOutlineMicrophone />
          </p>
          <p className="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <FiActivity />
          </p>
          <p className="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <GrDiamond />
          </p>
          <p className="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
