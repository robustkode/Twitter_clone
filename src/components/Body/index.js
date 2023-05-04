import React from "react";
import Header from "../Header";
import Tweet from "../Tweet";
import Feed from "../Feed";

import "./body.scss";
const index = () => {
  return (
    <div className="body">
      <Header />
      <Tweet />
      <Feed />
    </div>
  );
};

export default index;
