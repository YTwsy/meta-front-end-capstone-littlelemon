import {Layout, Menu} from 'antd';
import React from "react";
import {Link} from "react-router-dom";
const { Header} = Layout;

const MyHeader=()=>{
    return(
        <Header
            style={{
                position: 'sticky ',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor:'Menu',
                justifyContent:'space-between',
                height: 'auto'
            }}
        >
            <div className="demo-logo" style={{flex:2}}>
                <img src="../assets/icons_assets/Logo.svg"
                     alt="Little Lemon Logo"
                     style={{
                         verticalAlign: 'middle',
                         height: '55px'}}
                />
            </div>

            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                    flex: 3,
                    minWidth: 0,
                    justifyContent: 'flex-end',
                    fontSize: 18,
                }}>
                <Menu.Item key="1">Home
                    <Link to="/"></Link>
                </Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Menu</Menu.Item>
                <Menu.Item key="4">Reservations</Menu.Item>
                <Menu.Item key="5">Order Online</Menu.Item>
                <Menu.Item key="6">Login</Menu.Item>
            </Menu >
        </Header>

    )
}

export default MyHeader