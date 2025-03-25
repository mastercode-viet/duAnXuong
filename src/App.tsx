import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/LayoutAdmin";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import List from "./pages/orders/list";
import AdminList from "./pages/users/adminUser/list";
import AdminCreate from "./pages/users/adminUser/create";
import AdminEdit from "./pages/users/adminUser/edit";
import ClientList from "./pages/users/clientUser/list";
import ClientEdit from "./pages/users/clientUser/ediit";
import LayoutClient from "./components/LayoutClient";
import HomePage from "./pages/home_client/HomePage";
import Detail from "./pages/detail_client/detail";
import ScrollToTop from "./pages/home_client/ScrollToTop";


function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products">
                        <Route path="" element={<ProductList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                    <Route path="orders">
                        <Route path="" element={<List />} />
                    </Route>
                    <Route path="users">
                        {/* Admin Users */}
                        <Route path="admin_user">
                            <Route path="" element={<AdminList />} />
                            <Route path="create" element={<AdminCreate />} />
                            <Route path="edit/:id" element={<AdminEdit />} />
                        </Route>

                        {/* Client Users */}
                        <Route path="client_user">
                            <Route path="" element={<ClientList />} />
                            <Route path="edit/:id" element={<ClientEdit />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="/" element={<LayoutClient />} >
                    <Route index element={<HomePage />} />
                    <Route path="detail/:id" element={<Detail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
