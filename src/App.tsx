import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/LayoutAdmin";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import SigIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<ProtectedRoute><LayoutAdmin /></ProtectedRoute>}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products">
                        <Route path="" element={<ProductList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>    
                <Route >
                    <Route path="signin" element={<SigIn/>} />
                    <Route path="signup" element={<SignUp/>} />
                </Route> 
            </Routes>
        </>
    );
}

export default App;
