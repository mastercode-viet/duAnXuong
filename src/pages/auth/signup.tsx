import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const nav = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values: ", values);
    
    setTimeout(() => {
        nav("/signin");
      }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>
        <Form name="signup" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" }
              ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Tên người dùng" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự!" }
              ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item name="agree" valuePropName="checked">
            <Checkbox>Tôi đồng ý với điều khoản</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
