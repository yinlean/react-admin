import { Button, Card, Col, Form, Input, Menu, Row, Table, Tag } from 'antd';
import React, { useState } from 'react';
import BusinessGroup from './BusinessGroup';
import './index.less';
import { Loading3QuartersOutlined, LoadingOutlined, PoweroffOutlined } from '@ant-design/icons';

const Home = () => {
    const [tableData, setTableData] = useState([{}]);
    const columns = [
        {
            title: '标识',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: '标签',
            dataIndex: 'name',
            key: 'name',
            render: () => (
                <>
                    <Tag color="geekblue">12313</Tag>
                </>
            ),
        },
        {
            title: '业务组',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
        },
    ];
    const onSearch = (value: string) => console.log(value);
    return (
        <div className="home-content">
            <BusinessGroup width={200} />
            <Card className="flex-1">
                <Row justify="space-between" style={{ marginBottom: 10 }}>
                    <Col>
                        <Form layout="inline">
                            <Form.Item>
                                <Button shape="circle" icon={<LoadingOutlined />} />
                                <Button shape="circle" icon={<Loading3QuartersOutlined />} />
                            </Form.Item>
                            <Form.Item label="">
                                <Input.Search
                                    placeholder="模糊搜索表格内容(多个关键词请用空格分隔)"
                                    allowClear
                                    onSearch={onSearch}
                                    style={{ width: 300 }}
                                />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col>
                        <Button>批量操作</Button>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={tableData} />
            </Card>
        </div>
    );
};

export default Home;
