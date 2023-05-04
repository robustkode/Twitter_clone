import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header d-flex flex-column  px-3 pt-3">
      <div className="header__top d-flex mb-3">
        <div className="header__top__profile w-50">Home</div>
        {/* <div className="header__top__logo">Logo</div> */}
      </div>
      <div className="header__bottom d-flex justify-content-around">
        <p className="header__bottom__you active mb-0">For you</p>
        <p className="header__bottom__following mb-0">Following</p>
      </div>
    </div>
  );
};

export default Header;
