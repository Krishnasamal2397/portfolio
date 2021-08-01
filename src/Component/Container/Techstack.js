import React from "react";
import { Col, Card } from "antd";
import {
  FlagOutlined,
  CodepenOutlined,
  CloudServerOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import "./Center.css";

export default function Techstack() {
  return (
    <>
      <Col id="center" xs={24} sm={24} md={12} lg={10} xl={10} xxl={8}>
        <Card hoverable style={{ width: 300 }}>
          <h1>
            <CodepenOutlined /> Front end
          </h1>
          <p id="center">
            Html,CSS,sass,Javascript,React js ,react native for android,redux
            saga/thunk,styled component,unit testing with jest and enzyme,react
            navigation
          </p>
        </Card>
      </Col>
      <Col id="center" xs={24} sm={24} md={12} lg={10} xl={10} xxl={8}>
        <Card hoverable style={{ width: 300 }}>
          <h1>
            <CloudServerOutlined /> Backend end
          </h1>
          <p id="center">Node.js with express framework,mongo db,mysql</p>
        </Card>
      </Col>
      <Col id="center" xs={24} sm={24} md={12} lg={10} xl={10} xxl={8}>
        <Card hoverable style={{ width: 300 }}>
          <h1>
            <ToolOutlined /> Tools
          </h1>
          <p id="center">
            Git,sonar qube,elastic search,kibana,lodash,docker,jenkins,
            firebase,aws-ecr,s3,cloudfront
          </p>
        </Card>
      </Col>
      <Col id="center" xs={24} sm={24} md={12} lg={10} xl={10} xxl={8}>
        <Card hoverable style={{ width: 300 }}>
          <h1>
            <FlagOutlined /> Others
          </h1>
          <p id="center">Typescript,socket.io, passport.js,es6</p>
        </Card>
      </Col>
    </>
  );
}
