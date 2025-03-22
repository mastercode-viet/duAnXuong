import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SigIn = () => {
    const nav = useNavigate();
  const onFinish = (values:any) => {
    console.log("Login values: ", values);
    setTimeout(() => {
        localStorage.setItem("token", "fake-jwt-token"); // Lưu token
        nav("/admin"); // Chuyển hướng vào trang Admin
      }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Tên người dùng" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Đăng Nhập
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="default" className="w-full" onClick={() => nav("/signup")}>
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SigIn;
