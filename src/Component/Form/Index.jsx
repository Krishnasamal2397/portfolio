import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { PostUserDetail } from "../../Action/actionCreator";
import {  useDispatch } from "react-redux";

export function Index() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(PostUserDetail(values));
  };

  const onFinishFailed = (errorInfo) => {
    //print the error message
  };

  return (
    <Row justify="space-around">
      <Col span={24}>
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                label="name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="phoneNumber"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phoneNumber!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="comment"
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "Please input your query!",
                  },
                ]}
              >
                <Input.TextArea autoSave={true} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}



export default Index;
