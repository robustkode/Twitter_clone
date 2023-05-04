import React from "react";
import Layout from "../Layout";
import HeaderExplore from "../../components/HeaderExplore";
import Feed from "../../components/Feed";

const Body = () => {
  return (
    <>
      <HeaderExplore /> <Feed />
    </>
  );
};
const index = () => {
  return (
    <div>
      <Layout Body={Body} />
    </div>
  );
};

export default index;
