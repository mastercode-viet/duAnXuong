/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Drawer, Image, message, Pagination, Popconfirm, Skeleton, Table, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ListCate = () => {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Số danh mục trên mỗi trang

  // Fetch danh mục từ API
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/category`);
      return response.data.map((category: any) => ({
        key: category.id,
        ...category,
      }));
    },
  });

  // Xử lý phân trang
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data ? data.slice(startIndex, endIndex) : [];

  // Thêm hoặc cập nhật danh mục
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !image.trim()) {
      messageApi.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:3000/category/${editId}`, { name, image });
        messageApi.success("Cập nhật danh mục thành công");
      } else {
        await axios.post("http://localhost:3000/category", { name, image });
        messageApi.success("Thêm danh mục thành công");
      }
      queryClient.invalidateQueries({ queryKey: ["category"] });
      setOpen(false);
      setEditId(null);
      setName("");
      setImage("");
    } catch (error) {
      messageApi.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  // Xóa danh mục
  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      return axios.delete(`http://localhost:3000/category/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      messageApi.success("Xóa thành công");
    },
  });

  useEffect(() => {
    if (!open) {
      setEditId(null);
      setName("");
      setImage("");
    }
  }, [open]);
  
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["category"] });
  }, []);

  // Hiển thị dữ liệu lên form sửa
  const handleEdit = (category: any) => {
    setEditId(category.id);
    setName(category.name);
    setImage(category.image);
    setOpen(true);
  };

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (_: any, item: any) => (
        <Image src={item.image || "https://via.placeholder.com/50"} width={50} height={50} />
      ),
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, item: any) => (
        <div className="flex space-x-2">
          <Button type="primary" onClick={() => handleEdit(item)}>
            Sửa
          </Button>
          <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={() => mutate(item.id)} okText="Đồng ý" cancelText="Hủy">
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (isLoading) return <Skeleton />;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {contextHolder}
      <h2 className="text-2xl mb-5 font-semibold">Danh mục sản phẩm</h2>
      <Button
  type="primary"
  onClick={() => {
    setEditId(null);  // Đảm bảo không bị giữ id cũ
    setName("");       // Reset name
    setImage("");      // Reset image
    setOpen(true);     // Mở form
  }}
>
  Thêm danh mục
</Button>

      <Drawer title={editId ? "Chỉnh sửa danh mục" : "Thêm danh mục"} onClose={() => setOpen(false)} open={open}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Tên danh mục"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="URL Hình ảnh"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <Button type="primary" htmlType="submit" block className="mt-4">
            {editId ? "Cập nhật" : "Thêm"}
          </Button>
        </form>
      </Drawer>

      {/* Hiển thị bảng với dữ liệu phân trang */}
      <Table dataSource={paginatedData} columns={columns} pagination={false} rowKey="id" />

      {/* Phân trang */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data?.length || 0}
        onChange={(page) => setCurrentPage(page)}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </div>
  );
};

export default ListCate;
