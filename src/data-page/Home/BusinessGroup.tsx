import { Card, Form, Input, Menu, Row } from 'antd';
import React from 'react';
import './index.less';
import { SettingOutlined } from '@ant-design/icons';

interface Iprops {
    width: number;
}
const Home = (props: Iprops) => {
    const { width } = props;
    const onSearch = (value: string) => console.log(value);
    return (
        <Card className="left-box " style={{ width }}>
            <Row justify="space-between" align="middle">
                业务组
                {/* <p>业务组</p> */}
                <SettingOutlined />
            </Row>
            <Input.Search
                placeholder="组名称或ID"
                allowClear
                onSearch={onSearch}
                style={{ width: '100%', margin: '6px 0' }}
            />
            <div>
                <h6 style={{ color: '#666' }}>未分组对象</h6>
                <div style={{ marginLeft: 4, color: '#999', cursor: 'pointer' }}>
                    <p>对象1</p>
                    <p>对象2</p>
                </div>
            </div>
        </Card>
    );
};

export default Home;
