import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";


function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>

        </Route>
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
