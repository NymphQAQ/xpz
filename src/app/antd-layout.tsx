'use client'
import React, { useState } from 'react';
import {
    DashboardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {useRouter} from 'next/navigation';

const { Header, Sider, Content } = Layout;

const App = ({children}: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const nav = useRouter()
    return (
        <Layout className='h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed} theme="light"
                   breakpoint="xs">
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({key})=>{
                        nav.push(key)
                    }}
                    items={[
                        {
                            key: '/',
                            icon: <DashboardOutlined/>,
                            label: '主页',
                        },
                        {
                            key: '/user',
                            icon: <UserOutlined/>,
                            label: '用户',
                        },
                        // {
                        //     key: '3',
                        //     icon: <UploadOutlined />,
                        //     label: 'nav 3',
                        // },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;