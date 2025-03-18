import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/LayoutAdmin";
import ProductList from "./pages/products/list";
// import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import Home from "./pages/home";
import ListCate from "./pages/categorys/ListCate";
import AddCate from "./pages/categorys/AddCate";
import UpdateCate from "./pages/categorys/UpdateCate";

function App() {
  return (
    <>
      <Routes>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />

          <Route path="products" element={<ProductList />}>
            <Route index element={<ProductList />} />
            {/* <Route path="add" element={<ProductAdd />} /> */}
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>

          <Route path="category" element={<ListCate />} />
            <Route index element={<ListCate />} />
            <Route path="add" element={<AddCate />} />
            <Route path="edit/:id" element={<UpdateCate />} />
        </Route>

        <Route path="user">
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
