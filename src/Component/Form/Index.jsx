import React from "react";
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators,  } from "redux";
import { Form, Input, Button, Row, Col } from "antd";
import {postuserdetailloading} from '../../Action/actionCreator'
// import { getData } from "../../Action/Apicall";

export function Index(props) {
  const onFinish = (values) => {
// getData(values)
    // console.log("Success:", values);
    // postuserdetailsuccess(values);
    // props.postuserdetailsuccess(values)
    postuserdetailloading(values)
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
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
                label="Email"
                name="Email"
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
                label="Comment"
                name="Comment"
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

// const mapStateToProps = (state) => ({
  
// })

const mapDispatchToProps = (Dispatch) => {
  return { ...bindActionCreators(postuserdetailloading, Dispatch) };
};
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     postuserdetailloading: (data) => dispatch(postuserdetailloading(data)),
//       // glogin : (gresponse) => dispatch(glogin(gresponse)),

//   };
// };

export default connect(null, mapDispatchToProps)(Index)
