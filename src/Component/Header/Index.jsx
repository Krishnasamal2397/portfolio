import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col } from "antd";
import { Image } from 'antd';
import mylogo from '../Assest/Portfolio.jpg';
import './Index.css'

import "antd/dist/antd.css";

function HeaderComponent({navigation}) {
  const { Header } = Layout;
  const [current, setcurrent] = useState("1");
  const handleClick = (e) => {
    navigation(e.key)
    setcurrent(e.key);

  };
  return (
    <Header id="Header">
      <Row>
        <Col  span={4}>
          <Image src={mylogo} alt="logo"  width={50}/>
        </Col>
        <Col offset={12} span={8}>
          <Menu
            onClick={handleClick}
            selectedKeys={current}
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Work</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}
HeaderComponent.propTypes = {
navigationdetail: PropTypes.func
}


export default HeaderComponent;
