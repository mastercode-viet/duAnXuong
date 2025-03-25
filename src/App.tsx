import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/LayoutAdmin";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import DashBoard from "./pages/admin/DashBoard";
import CategoryList from "./pages/categories/listCategory";

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="products">
                        <Route path="" element={<ProductList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                    <Route path="categories">
                        <Route path="" element={<CategoryList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
