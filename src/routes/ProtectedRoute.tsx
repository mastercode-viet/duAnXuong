import { Navigate } from "react-router-dom";
import { message } from "antd";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    message.error("Bạn không có quyền truy cập! Vui lòng đăng nhập.");
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
