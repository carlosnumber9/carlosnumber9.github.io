import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export function MainLayout() {
    const options = new Array(15).fill(null);
    return (
        <>
            <Layout>
                <Header>
                    <h2> Carlos Pinedo Sánchez </h2>
                </Header>
                <Content>
                    <Menu theme="light" mode="horizontal">
                        {options.map((_, index) => (
                            <Menu.Item key={index + 1}>{`nav ${index + 1}`}</Menu.Item>
                        ))}
                    </Menu>
                </Content>
                <Footer>Carlos Pinedo Sánchez ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}
