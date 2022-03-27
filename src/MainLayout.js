import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import SECTIONS from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const menuStyle = {
    display: 'flex',
    justifyContent: 'center'
};

export function MainLayout() {
    return (
        <>
            <Layout>
                <Header>
                    <h2> Carlos Pinedo Sánchez </h2>
                </Header>
                <Content>
                    <Menu theme="light" mode="horizontal" style={menuStyle}>
                        {SECTIONS.map((section, index) => (
                            <>
                                <Menu.Item key={index + 1}>
                                    <span className='section-name'>{`${section.name}`}</span>
                                    <FontAwesomeIcon
                                        className="section-icon"
                                        icon={section.icon}
                                        size="2xl"
                                    />
                                </Menu.Item>
                            </>
                        ))}
                    </Menu>
                </Content>
                <Footer>Carlos Pinedo Sánchez ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}
