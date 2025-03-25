import React from 'react'
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import useCreate from '../../../hooks/useCreate';

const AdminCreate = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useCreate({ resource: "users" });
    const onSubmit = (formData: any) => {
        mutate(formData, {
            onSuccess: () => messageApi.success("Thêm người dùng thành công"),
            onError: () => messageApi.error("Có lỗi xảy ra"),
        });
    };
    return (
        <div>
            <div className="flex items-center justify-between  mb-3">
                <h2 className="text-xl font-semibold">Thêm người dùng</h2>
            </div>

            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onSubmit}
            >
                <Form.Item label="Tên người dùng" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Ảnh người dùng" name="image">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Điện thoại" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="Địa chỉ" name="address">
                    <Input />
                </Form.Item>
                <Form.Item label="Quyền" name="role">
                    <Select
                        placeholder="Chọn quyền"
                        options={[
                            { value: "admin", label: "Admin" },
                            { value: "user", label: "User" },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Trạng thái" name="status">
                    <Select
                        showSearch
                        placeholder="Chọn trạng thái"
                        optionFilterProp="label"
                        options={[
                            { value: "active", label: "Active" },
                            { value: "inactive", label: "Inactive" },
                        ]}
                    />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        {isPending ? <span>Đang tải...</span> : <span>Thêm người dùng</span>}
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
}

export default AdminCreate