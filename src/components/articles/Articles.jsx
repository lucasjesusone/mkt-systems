import React from "react";
import { IoWatchOutline } from "react-icons/io";
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
            <IoWatchOutline />
          </p>
          <p classname="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <HiOutlineMicrophone />
          </p>
          <p classname="title">Spend time smart</p>
          <p>Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <FiActivity />
          </p>
          <p classname="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>

        <div>
          <p className="icon">
            <GrDiamond />
          </p>
          <p classname="title">Spend time smart</p>
          <p className="text">Lorem ipsum sit amet lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
