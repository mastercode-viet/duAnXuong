/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation,  useQueryClient } from "@tanstack/react-query";
import { Button, Image, message, Popconfirm, Skeleton, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import useList from "../../hooks/useList";

const ProductList = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError, error } =  useList({ resource: "products" })
    const { mutate } = useMutation({
        mutationFn: async (id) => {
            return axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            // call lại API
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            messageApi.success(`Xóa thành công`);
        },
    });

    const columns = [
        {
            title: "Ảnh",
            dataIndex: "imageUrl",
            key: "imageUrl",
            render: (_: any, item: any) => {
                return <Image src={item.imageUrl} width={50} height={50} />;
            },
        },
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
        },
        {
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-2">
                        <Button type="primary">
                            <Link to={`/admin/products/edit/${item.id}`}>Sửa</Link>
                        </Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => mutate(item.id!)}
                            okText="Đồng ý"
                            cancelText="No"
                        >
                            <Button type="primary" danger>
                                Xóa
                            </Button>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    if (isLoading) return <Skeleton />;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <h2 className="text-2xl mb-5 font-semibold">Products</h2>
            <Table dataSource={data} columns={columns} />
            {contextHolder}
        </div>
    );
};

export default ProductList;
