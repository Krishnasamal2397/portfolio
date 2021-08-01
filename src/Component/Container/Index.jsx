import React from "react";
import { Layout, Row, Col, Divider } from "antd";

import Index from "../Form/Index";
import Aboutme from "./Aboutme";
import Home from "./Home";
import Techstack from "./Techstack";
import Description from "./Description";

import "antd/dist/antd.css";
import "./Index.css";

function Container() {
  const { Content } = Layout;

  return (
    <Content id="content">
      <Row gutter={[0, 48]}>
        <Col span={24}>
          <Row gutter={[0, 48]} justify="space-around" id="home">
            <Home />
          </Row>
          <Row gutter={[0, 48]} id="about" justify="space-around">
            <Col span={24}>
              <Aboutme />
            </Col>
          </Row>
          <Row gutter={[0, 48]} justify="space-around" id="work">
            <Row gutter={[0, 48]} justify="space-around">
              <Col id="about_me" span={24}>
                TechStack
              </Col>
            </Row>
            <Row id="techstack_card" gutter={[0, 48]} justify="space-around">
              <Techstack />
            </Row>
          </Row>
          <Row id="contact" justify="space-around">
            <Col span={24}>
              <h1 id="about_me">Contact</h1>
            </Col>
            <Col span={10}>
              <Description />
            </Col>
            <Col span={1}>
              <Divider type="vertical" style={{ height: "100%" }} />
            </Col>
            <Col span={10}>
              <Index />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
}

export default Container;
