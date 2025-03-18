/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, message, Popconfirm, Select, Skeleton, Table, Tag } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { TagOutlined } from "@ant-design/icons"

const List = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/orders`);
            console.log(response.data);
            return response.data.map((orders: any) => ({
                key: orders.id,
                ...orders,
            }));
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (id) => {
            return axios.delete(`http://localhost:3000/orders/${id}`);
        },
        onSuccess: () => {
            // call lại API
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            messageApi.success(`Xóa thành công`);
        },
    });

    const columns = [
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Ngày đặt",
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: "Tổng tiền",
            dataIndex: "total_price",
            key: "total_price",
        },
        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
            render: (text: string) => {
                let color = "default";
                if (text === "pending") color = "gold";
                if (text === "completed") color = "green";
                if (text === "canceled") color = "red";
                if (text === "delivered") color = "blue";
                return (
                    <Tag color={color}>
                        {text === "pending"
                            ? "Chờ xử lý"
                            : text === "completed"
                                ? "Hoàn thành"
                                : text === "delivered"
                                    ? "Đang giao hàng"
                                    : text === "canceled"
                                        ? "Hủy"
                                        : "Không xác định"}
                    </Tag>
                )

            },
        },
        {
            title: "Thao tác",
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-2">
                        <Button type="primary">
                            <Link to={``}><TagOutlined /></Link>
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
            <h2 className="text-2xl mb-5 font-semibold">Orders</h2>
            <Table dataSource={data} columns={columns} />
            {contextHolder}
        </div>
    );
};

export default List;
