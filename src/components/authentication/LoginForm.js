import React from 'react';
import { css } from 'glamor';
import { Form, Icon, Input, Button } from 'antd';

const iconStyle = css({
  color: 'rgba(0,0,0,.25)',
});

const handleSubmit = (e, { validateFields }, onSubmit) => {
  e.preventDefault();

  validateFields((err, { email, password }) => {
    if (!err) {
      onSubmit({ email, password });
    }
  });
};

const LoginForm = ({ form, onSubmit }) => {
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={e => handleSubmit(e, form, onSubmit)} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(<Input prefix={<Icon type="user" {...iconStyle} />} placeholder="Email" />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input
          prefix={<Icon type="lock" {...iconStyle} />}
          type="password"
          placeholder="Password"
        />)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(LoginForm);
