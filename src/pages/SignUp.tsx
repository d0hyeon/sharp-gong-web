import React from 'react';
import { Form, Input, Button } from 'antd';
import { Layout, H1, Content } from '@src/components/common/styles';
import { REGEXP_PASSWORD } from '@src/constants/pattern';
import { ID_RULES, PASSWORD_RULES } from '@src/constants/validate';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

const API_REQURET_HEADERS = {
  'Content-Type': 'application/json'
}

const SignUp: React.FC = () => {
  const submitHandler = React.useCallback((form) => {
    delete form.memberRePassword;
    
    fetch('/api/member/register', {
      method: 'post',
      headers: API_REQURET_HEADERS,
      body: JSON.stringify(form)
    });
  }, []);

  return (
    <Layout>
      <H1>Sign Up</H1>
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
            <Form.Item
              label="비밀번호 재입력"
              name="memberRePassword"
              rules={[
                ...PASSWORD_RULES,
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if(getFieldValue('memberPassword') !== value) {
                      return Promise.reject('비밀번호와 동일하게 입력해주세요.');
                    } 
                    return Promise.resolve('비밀번호와 동일합니다.');
                  } 
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="닉네임"
              name="memberNickname"
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                회원가입
              </Button>
            </Form.Item>
          </Form>
      </Content>
    </Layout>
  )
};

SignUp.displayName = 'SignUp';
export default SignUp;