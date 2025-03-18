import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCate = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image }),
    }).then(() => navigate("/admin/category"));
  };

  return (
    <div>
      <h2>Thêm danh mục</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên danh mục" onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="URL Hình ảnh" onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddCate;
