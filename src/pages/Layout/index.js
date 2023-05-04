import React from "react";
import "./layout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import Feed from "../../components/Feed";
import Widget from "../../components/Widget";
import SidebarSmall from "../../components/sidebar/SidebarSmall";
import Footbar from "../../components/Footbar";
import { useWindowSize } from "../../customHooks";

const WINDOW = {
  small: 500,
  medium: 800,
  large: 1100,
  xlarge: 2000,
};
const Layout = ({ Body, widget }) => {
  const WindowWidth = useWindowSize();
  //console.log(body);
  //console.log(WindowWidth);
  return (
    <div>
      <Row>
        <Col lg={3} md={2} sm={3} className="left">
          {!WindowWidth | (WindowWidth > WINDOW.small) ? (
            <Sidebar />
          ) : (
            <></>
            // <SidebarSmall />
          )}
        </Col>
        <Col lg={7} md={8} sm={9} xs={14} className="middle fluid">
          <Body />
        </Col>
        <Col lg={4} md={4} sm={2} className="right">
          {/* {!WindowWidth | (WindowWidth < WINDOW.medium) ? <></> : <Widget />} */}
          {!WindowWidth ? (
            <></>
          ) : WindowWidth < WINDOW.small ? (
            <Footbar />
          ) : WindowWidth < WINDOW.medium ? (
            <></>
          ) : (
            <Widget />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
