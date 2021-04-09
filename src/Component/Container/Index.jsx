import React,{useContext} from "react";
import { Layout, Row, Col, Card, Descriptions, Divider, Space } from "antd";
import {
  ArrowDownOutlined,
  ToolOutlined,
  CloudServerOutlined,
  CodepenOutlined,
  FlagOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import myphoto from "../Assest/Myimage.png";
import "antd/dist/antd.css";
import "./Index.css";
import Index from "../Form/Index";
import ThemeContext from "../Helper";
import {reDirect} from "../../Helper/reDirect"

function Container() {
const theme = useContext(ThemeContext);
// console.log("i am get the routing id",theme)
  const { Content } = Layout;
  const redirecttoGit =()=>{
reDirect("git")
  }
  const redirecttoLinkdn =()=>{
    reDirect("linkdn")
  }
  const redirecttoInsta =()=>{
    reDirect("insta")
  }
  return (
    <Content>
      <Row gutter={[0, 48]} justify="space-around" id="Profile_intro">
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
      </Row>
      <Row gutter={[0, 48]} id="About" justify="space-around">
        <Col span={24}>
          <h1 id="about_me">About Me</h1>
          <p
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              padding:"5vw"
            }}
          >
            How am I??
            <br />
            I'm a Frontend Web Developer at Nineleaps.
            <br />
            From being an Intern to full time was not a easy job for me as i
            joined the organization with zero knowledge on development.
            <br />
            followed my mentor path ,got help from colleague and worked hard for
            that the achievement.
            <br />
            Present i am working client project at Nineleaps and having learned
            couple of TechStack,developing application,testing and deploying it
            from my internship Project.
          </p>
        </Col>
      </Row>
      <Row gutter={[0, 48]} justify="space-around">
        <Row gutter={[0, 48]} justify="space-around">
          <Col id="about_me" span={24}>
            TechStack
          </Col>
        </Row>
        <Row id="techstack_card" gutter={[0, 48]} justify="space-around">
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
            // span={12}
            
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            xxl={8}
          >
            <Card hoverable style={{ width: 300 }}>
              <h1>
                <CodepenOutlined /> Front end
              </h1>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Html,CSS,sass,Javascript,React js ,react native for
                android,redux saga/thunk,styled component,unit testing with jest
                and enzyme,react navigation
              </p>
            </Card>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
            // span={12}
                        
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            xxl={8}
          >
            <Card hoverable style={{ width: 300 }}>
              <h1>
                <CloudServerOutlined /> Backend end
              </h1>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Node.js with express framework,mongo db,mysql
              </p>
            </Card>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
            // span={12}
                        
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            xxl={8}
          >
            <Card hoverable style={{ width: 300 }}>
              <h1>
                <ToolOutlined /> Tools
              </h1>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Git,sonar qube,elastic search,kibana,lodash,docker,jenkins,
                firebase,aws-ecr,s3,cloudfront
              </p>
            </Card>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
            // span={12}
                        
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            xxl={8}
          >
            <Card hoverable style={{ width: 300 }}>
              <h1>
                <FlagOutlined /> Others
              </h1>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Typescript,socket.io,
                passport.js,es6
              </p>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row id="About" justify="space-around">
        <Col span={24}>
          <h1 id="about_me">Contact</h1>
        </Col>
        <Col span={10}>
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
        </Col>
        <Col span={1}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span={10}>
          <Index />
        </Col>
      </Row>
    </Content>
  );
}

export default Container;
