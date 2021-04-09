import React from "react";
import { Col, Layout, Row } from "antd";
import "antd/dist/antd.css";

function FooterComponent() {
  const { Footer } = Layout;
  let TodayDate = new Date();
  return (
    <Footer>
      <Row>
        <Col span={22}>
          <p>Krishna © {TodayDate.getFullYear()}</p>
        </Col>
        <Col span={2}>
          <p>Version 1.0</p>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterComponent;
