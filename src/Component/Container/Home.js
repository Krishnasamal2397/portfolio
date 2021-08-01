import React from "react";
import { Col } from "antd";
import {
  ArrowDownOutlined,
} from "@ant-design/icons";
import myphoto from "../Assest/Myimage.png";
import "./Index.css";

export default function Home() {
    return (
        <>
            <Col id="Profile_intro_col_1" offset={2} span={13}>
              <h1 id="My_Name">Hi,I'm Krishna.</h1>
              <h4 id="My_Designation">I'm a full-stack Developer.</h4>
            </Col>
            <Col id="Profile_intro_col_2" span={9}>
              <img src={myphoto} alt="pic" id="myphoto" />
            </Col>
            <div id="Scroll_Down_Animation">
              <ArrowDownOutlined />
            </div>
        </>
    )
}
