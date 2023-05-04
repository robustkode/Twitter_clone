import React from "react";
import "./searchBar.scss";
import { AiOutlineSearch } from "react-icons/ai";

const index = () => {
  return (
    <div className="searchBar d-flex align-items-center p-3">
      <AiOutlineSearch size={20} className="me-2 inactive" />
      <input
        type="text"
        className="inactive w-100"
        placeholder="Search Twitter"
      />
    </div>
  );
};

export default index;
