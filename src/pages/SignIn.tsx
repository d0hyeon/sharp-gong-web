import React from 'react';
import { Form, Input, Button } from 'antd';
import { Layout, H1, Content } from '@src/components/common/styles';
import { ID_RULES, PASSWORD_RULES } from '@src/constants/validate';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};


const Login: React.FC = () => {
  const submitHandler = React.useCallback((form) => {
    fetch('/api/login', {
      method: 'post',
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(form)
    });
  }, []);
  return (
    <Layout>
      <H1>Login</H1>
      <Content>
        <Form
          {...layout}
          initialValues={{memberId: '', memberPassword: ''}}
          onFinish={submitHandler}
        >
          <Form.Item
            label="아이디"
            name="memberId"
            rules={ID_RULES}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="memberPassword"
            rules={PASSWORD_RULES}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}

Login.displayName = 'Login';
export default Login;