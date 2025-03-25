import { Badge, Card, Col, Row, Statistic, Table, Tag, Tooltip } from 'antd';

import { ShoppingCartOutlined } from "@ant-design/icons";

const DashBoard = () => {

  const columns = [
    { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
    { title: "Khách hàng", dataIndex: "customer", key: "customer" },
    { title: "Giỏ hàng", dataIndex: "cart", key: "cart" },
    { title: "Tổng tiền", dataIndex: "total", key: "total", render: (text: number) => `$${text}` },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <Tag color={status === "Đang xử lý" ? "orange" :  "green"}>{status}</Tag>,
      
    },
  ];

  const data = [
    { key: "1", orderId: "ORD123", customer: "Nguyễn Văn A", cart: "2 sản phẩm ", total: 120, status: "Đang xử lý" },
    { key: "2", orderId: "ORD124", customer: "Trần Thị B", cart: "2 sản phẩm ", total: 250, status: "Đang xử lý" },
  ];
  const orderCount = data.filter((order) => order.status === "Đang xử lý").length;
  const totalRevenue = data.reduce((sum, order) => sum + order.total, 0);
  const totalUser = data.filter((user) => user.status === "active").length;
  return (

    <div>
      <div>

      </div>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Đơn hàng " variant="borderless" style={{ backgroundColor: "#b3e5fc" }}>
            <Badge count={orderCount} style={{ backgroundColor: '#52c41a' }}>
              <span style={{ fontSize: 15 }}> Đang Xử lý</span>
            </Badge>

          </Card>
        </Col>
        <Col span={8}>
          <Card title="Doanh thu" variant="borderless" style={{ backgroundColor: "yellow" }}>
            <Statistic value={totalRevenue} precision={2} prefix="$" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Khách hàng" variant="borderless" style={{ backgroundColor: " lightgreen" }}>
            <Statistic value={totalUser}  prefix="" />
          </Card>
        </Col>
        
      </Row>
      <h1>
        <Badge count={orderCount} showZero color="#f5222d">
          <ShoppingCartOutlined style={{ fontSize: 24, marginRight: 8, color: "#1890ff" }} />
        </Badge>
        New Order
      </h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default DashBoard
