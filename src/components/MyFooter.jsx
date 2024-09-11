import {Col, Layout, Row} from 'antd';
import React from "react";
const { Footer } = Layout;

const MyFooter = () => {
    return (
        <Footer
            style={{
                justifyItems: 'center'
            }}
        >
            <Row align="middle" style={{ height: 'auto'}}>
                <Col span={6} style={{padding: '20px'}}>
                    <div>
                        <img src={'/assets/icons_assets/small_logo.png'}
                                style={{height:'240px'}}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div>
                        <h3>Document Navigation</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </Col>
                <Col span={6}>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </Col>
                <Col span={6}>
                    <div>
                        <h3>Social Media Links</h3>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </Col>

            </Row>


            <p style={{textAlign: 'center'}}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</p>
        </Footer>
    )
}

export default MyFooter