import { Button, Popconfirm, Skeleton, Table } from 'antd';
import React, { useState } from 'react'
import useList from '../../../hooks/useList';
import ProductFormDrawer from '../../../components/UserFormDrawer';

const ClientList = () => {
    const { data, isLoading, error, isError } = useList({ resource: "users" });
    const [open, setOpen] = useState(false);
    const [editingtId, setEditingtId] = useState<number | null>(null);

    const dataSource = data?.data
        .filter((user: any) => user.role === "user") // Lọc chỉ lấy admin
        .map((user: any) => ({
            key: user.id,
            ...user,
        }));

    const columns = [
        {
            title: "Tên người dùng",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Điạ chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Chức vụ",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
        },
        {
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-2">
                        <Button
                            type="primary"
                            onClick={() => {
                                setEditingtId(item.id);
                                setOpen(true);
                            }}
                        >
                            Sửa
                        </Button>
                        <Button type="primary" danger>
                            <Popconfirm title="Xóa người dùng" onConfirm={() => { }}>
                                Xóa
                            </Popconfirm>
                        </Button>
                    </div>
                );
            },
        },
    ];

    if (isLoading) return <Skeleton active />;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không người dùng nào</div>;
    return (
        <div>
            <div className="flex items-center justify-between  mb-3">
                <h2 className="text-xl font-semibold">Người dùng</h2>
            </div>

            <Table dataSource={dataSource} columns={columns} />
            <ProductFormDrawer
                open={open}
                onClose={() => setOpen(false)}
                userId={editingtId ?? undefined}
            />
        </div>
    );
}

export default ClientList