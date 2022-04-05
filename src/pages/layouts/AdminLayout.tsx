import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';


import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;




type Props = {}

const AdminLayout = (props: Props) => {
  return (
<div>

<Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

      <Menu.Item key="0">
      <NavLink to="/admin"> Admin </NavLink>
        </Menu.Item>

        <Menu.Item key="-0">
          <NavLink to="/"> Quay lại Trang Web</NavLink>
        </Menu.Item>

        <Menu.Item>
        </Menu.Item>

        <Menu.Item key="1" icon={<UserOutlined />}>
         Quản Lý Bài Viết
        </Menu.Item>

        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to="#">Quản lý Danh Mục</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <NavLink to="products">Quản lý Sản Phẩm</NavLink>
        </Menu.Item>


        
        {/* <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item> */}
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      



        <div>    
        <Outlet />   
        </div>



        <Footer style={{ textAlign: 'center' }}>Copyright © 2012. Designed by Nguyen Post School</Footer>
      </Layout>
     </Layout>
    </div>
  )
}

export default AdminLayout