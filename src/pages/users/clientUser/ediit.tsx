import { Button, Form, Input, InputNumber, message, Select, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import useOne from '../../../hooks/useOne';
import useUpdate from '../../../hooks/useUpdate';

const ClientEdit = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const { data, isLoading } = useOne({ resource: "users", id: Number(id) });
    console.log(data);
    const { mutate, isPending } = useUpdate({ resource: "users", id: Number(id) });
    const onSubmit = (formData: any) => {
        const updatedData = { ...data?.data, ...formData };
        mutate(updatedData, {
            onSuccess: () => messageApi.success("Cập nhật sản phẩm thành công"),
            onError: () => messageApi.error("Có lỗi xảy ra"),
        });
    };
    return (
        <div>
            <div className="flex items-center justify-between  mb-3">
                <h2 className="text-xl font-semibold">Thêm Sản phẩm</h2>
            </div>
            <Skeleton loading={isLoading} active avatar>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onSubmit}
                    initialValues={data?.data}
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
                            {isPending ? <span>Đang tải...</span> : <span>Cập nhật sản phẩm</span>}
                        </Button>
                    </Form.Item>
                </Form>
            </Skeleton>

            {contextHolder}
        </div>
    );
}

export default ClientEdit