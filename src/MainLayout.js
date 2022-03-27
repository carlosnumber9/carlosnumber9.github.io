import React from 'react';
import { Layout } from 'antd';
import { Navbar } from './fragments/Navbar';
import { FOOTER_STYLE } from './constants';
const { Header, Content, Footer } = Layout;

export function MainLayout() {
    return (
        <>
            <Layout>
                <Header>
                    <h2> Carlos Pinedo Sánchez </h2>
                </Header>
                <Content>
                    <Navbar></Navbar>
                </Content>
                <Footer style={FOOTER_STYLE}>
          Carlos Pinedo Sánchez ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </>
    );
}
