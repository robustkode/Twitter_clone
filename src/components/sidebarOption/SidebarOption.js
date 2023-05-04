import React from "react";
import "./sidebarOption.scss";

const index = ({ Icon, name, className, onClick }) => {
  return (
    <div
      className={`sidebarCont__option ${className} d-flex`}
      onClick={onClick}
    >
      <div
        className={`sidebarCont__option__cont py-2 d-flex align-items-center justify-content-between ${
          className != "mobile" ? "px-3" : ""
        }`}
      >
        <Icon className="sidebarCont__option__icon" size={25} />
        <span className="ms-3">{name}</span>
      </div>
    </div>
  );
};

export default index;
