import React from 'react';
import { Card, Row, Col, Space, Divider } from 'antd';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';

export function PresentationCard() {
    return (
        <Card hoverable>
            <Row justify='center'>
                <Col span={11} style={{textAlign: 'right', paddingRight: '20px'}}>
                    <p> 26 years old </p>
                    <p> 686637099 </p>
                    <a href="mailto:cpinedocsb@gmail.com"> 
                        <p> cpinedocsb@gmail.com </p>
                    </a>
                    <p> Madrid, Spain </p>
                </Col>
                <Col span={2}>
                    <Divider type='vertical' style={{height: '100%'}}></Divider>
                </Col> 
                <Col span={11}>
                    <Space direction='vertical' align='center'>
                        <a href="https://www.linkedin.com/in/carlos-pinedo-s%C3%A1nchez-b661a7130/" target="blank">
                            <LinkedinFilled style={{fontSize: '2rem'}}/> 
                        </a>
                        <a href="https://www.github.com/carlosnumber9" target="blank">
                            <GithubOutlined style={{fontSize: '2rem'}}/> 
                        </a>
                    </Space>
                </Col>
            </Row>
        </Card>
    );
}