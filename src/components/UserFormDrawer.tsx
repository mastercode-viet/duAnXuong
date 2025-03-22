import { Button, Drawer, Form, Input, InputNumber, message, Select, Skeleton } from "antd";
import useCreate from "../hooks/useCreate";
import useOne from "../hooks/useOne";
import useUpdate from "../hooks/useUpdate";

type UserFormDrawerProps = {
    open: boolean;
    onClose: () => void;
    userId?: number;
};

const UserFormDrawer = ({ open, onClose, userId }: UserFormDrawerProps) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const { data, isLoading } = useOne({
        resource: "users",
        id: userId ?? 0,
    });
    const { mutate: createMutate, isPending: isCreatePending } = useCreate({
        resource: "users",
    });
    const { mutate: updateMutate, isPending: isUpdatePending } = useUpdate({
        resource: "users",
        id: userId ?? 0,
    });

    const onSubmit = (formData: any) => {
        if (userId) {
            updateMutate(formData, {
                onSuccess: () => {
                    messageApi.success("Cập nhật thành công");
                    onClose();
                },
                onError: () => messageApi.error("Có lỗi xảy ra"),
            });
        } else {
            createMutate(formData, {
                onSuccess: () => {
                    messageApi.success("Thêm thành công");
                    onClose();
                },
                onError: () => messageApi.error("Có lỗi xảy ra"),
            });
        }
    };

    return (
        <Drawer
            title={userId ? "Sửa người dùng" : "Thêm người dùng"}
            width={378}
            onClose={onClose}
            open={open}
        >
            <Skeleton loading={isLoading && !!userId} active>
                <Form form={form} layout="vertical" onFinish={onSubmit} initialValues={data?.data}>
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
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isCreatePending || isUpdatePending}
                        >
                            {userId ? "Cập nhật người dùng" : "Thêm người dùng"}
                        </Button>
                    </Form.Item>
                </Form>
            </Skeleton>
            {contextHolder}
        </Drawer>
    );
};

export default UserFormDrawer;
