import React from "react";
import Post from "../Post";

const index = () => {
  return (
    <div className="Feed">
      {[...Array(20)].map(() => (
        <Post />
      ))}
    </div>
  );
};

export default index;
