import React from 'react';
import { Layout } from 'antd';
import { Navbar } from './fragments/Navbar';
import { FOOTER_STYLE } from './constants';
const { Header, Content, Footer } = Layout;
import './App.css';

export function MainLayout() {
    return (
        <>
            <Layout className='site-layout-content'>
                <Header style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
                    <h1> Carlos Pinedo Sánchez </h1>
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
