'use client';
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';

const LoginForm = () => {
  const onFinish = (values: string): void => {
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login-form-wrapper w-full h-screen pb-10 flex justify-center items-center bg-[#e3e3e3]'>
      <div className='login-form w-[400px] p-10 bg-[#f7f7f780] backdrop-blur-md shadow-md rounded-xl'>
        <div className='logo p-5 flex justify-center items-end'>
          <Image
            src='/netflop.png'
            alt='NETFLOP Logo'
            width={150}
            height={24}
            priority
          />
          <span className='pb-3 text-xs'>admin</span>
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}>
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}>
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <div className='flex justify-between'>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button w-full'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
