import React from 'react'
import {  Descriptions, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "./Index.css";
import { reDirect } from "../../Helper/reDirect";

function Description() {
    const redirecttoGit = () => {
        reDirect("git");
      };
      const redirecttoLinkdn = () => {
        reDirect("linkdn");
      };
      const redirecttoInsta = () => {
        reDirect("insta");
      };
    return (
        <>
         <Descriptions
                layout="vertical"
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
              >
                <Descriptions.Item
                  label={
                    <h1>
                      <MailOutlined /> E-Mail
                    </h1>
                  }
                  span={24}
                >
                  krishnasamal2303@gmail.com
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <h1>
                      <PhoneOutlined /> Telephone
                    </h1>
                  }
                  span={24}
                >
                  +91-8917547640/8114362320
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <h1>
                      <IdcardOutlined /> Address
                    </h1>
                  }
                  span={24}
                >
                  Plot.No-479,Bank of India,
                  Lane-3,Tarenigada,Paradip-754142,Jagtasinghpur,Odisha
                </Descriptions.Item>
                <Descriptions.Item label={<h1>Follow me</h1>} span={24}>
                  <Space size="middle" id="socialmedia">
                    <GithubOutlined onClick={redirecttoGit} />
                    <LinkedinOutlined onClick={redirecttoLinkdn} />
                    <InstagramOutlined onClick={redirecttoInsta} />
                  </Space>
                </Descriptions.Item>
              </Descriptions>   
        </>
    )
}

export default Description
