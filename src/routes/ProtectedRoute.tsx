import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("token"); // Kiểm tra token

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
