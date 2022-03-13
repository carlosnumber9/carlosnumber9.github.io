import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { SECTIONS } from './constants';

export function MainLayout() {
    return (
        <>
            <Layout>
                <Header>
                    <h2> Carlos Pinedo Sánchez </h2>
                </Header>
                <Content>
                    <Menu theme="light" mode="horizontal">
                        {SECTIONS.map((section, index) => (
                            <Menu.Item key={index + 1}>{`${section.name}`}</Menu.Item>
                        ))}
                    </Menu>
                </Content>
                <Footer>Carlos Pinedo Sánchez ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}
