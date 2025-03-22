import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SigIn = () => {
    const nav = useNavigate();
  const onFinish = async (values:any) => {
    try {
        console.log("Login values:", values);
    
        // Lấy thông tin user từ localStorage (giả lập)
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
    
        if (!savedUser.username || !savedUser.password) {
          alert("Không tìm thấy tài khoản! Vui lòng đăng ký.");
        }
    
        if (values.username !== savedUser.username || values.password !== savedUser.password) {
         alert("Sai tài khoản hoặc mật khẩu!");
        }
    
        localStorage.setItem("token", "fake-jwt-token"); // Lưu token
        message.success("Đăng nhập thành công!");
        setTimeout(() => {
          nav("/signin"); // Chuyển hướng vào trang Admin
        }, 2000);
      } catch (error: any) {
        message.error(error.message);
      }
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
