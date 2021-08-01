import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Row, Col } from "antd";
import { Image } from "antd";
import mylogo from "../Assest/Portfolio.jpg";
import "./Index.css";

import "antd/dist/antd.css";

function HeaderComponent() {
  const { Header } = Layout;
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Header id="Header">
      <Row gutter={[0, 48]}>
        <Col span={4}>
          <Image src={mylogo} alt="logo" width={50} />
        </Col>
        <Col offset={12} span={8}>
          <Menu
            onClick={handleClick}
            selectedKeys={current}
            theme="dark"
            mode="horizontal"
          >
            <Menu.Item key="#home">
              <a href="#home">Home</a>
            </Menu.Item>
            <Menu.Item key="#about">
              <a href="#about">About</a>
            </Menu.Item>
            <Menu.Item key="#work">
              <a href="#work">Work</a>
            </Menu.Item>
            <Menu.Item key="#contact">
              <a href="#contact">Contact</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}
HeaderComponent.propTypes = {
  navigationdetail: PropTypes.func,
};

export default HeaderComponent;
