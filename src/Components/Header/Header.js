import React, { useState } from 'react';
import { Layout, Button, Badge, Avatar, Dropdown, Menu } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import CustomSearch from './CustomSearch';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ onSearch, hasUnreadNotification }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('normal');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUserRole('normal');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUserProfile = () => {
    // Redirect user to user profile page
    navigate('/user-profile');
  };

  const handleSwitchToNotary = () => {
    setUserRole('notary');
  };

  const menuItems = [
    <Menu.Item key="1" onClick={handleUserProfile}>Thông tin người dùng</Menu.Item>,
  ];

  if (userRole === 'notary') {
    menuItems.push(
      <Menu.Item key="2">Quản lý tài sản</Menu.Item>,
      <Menu.Item key="3">Quản lý bài đăng</Menu.Item>,
      <Menu.Item key="4">Quản lý người dùng</Menu.Item>,
      <Menu.Item key="5">Số hóa tài sản</Menu.Item>
    );
  } else {
    menuItems.push(
      <Menu.Item key="3">Danh sách tài sản</Menu.Item>
    );
  }

  menuItems.push(
    <Menu.Item key="6" onClick={handleLogout}>Đăng xuất</Menu.Item>
  );

  return (
    <Header style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', width: '100%', zIndex: 1000  }}>
      <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
        <img src="batdongsanlogosblack.png" alt="Logo" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <CustomSearch onSearch={onSearch} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge dot={hasUnreadNotification} style={{ marginRight: '20px' }}>
          <BellOutlined style={{ fontSize: '20px', marginRight: '20px' }} />
        </Badge>
        <Button type="primary" style={{ marginRight: '20px', zIndex: 0 }}>Đăng tin</Button>
        {isLoggedIn ? (
          <Dropdown overlay={<Menu>{menuItems}</Menu>} trigger={['click']} >
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} style={{ marginRight: '8px' }} />
              <span>{userRole === 'normal' ? 'Người dùng' : 'Notary'}</span>
            </div>
          </Dropdown>
        ) : (
          <Button type="text" onClick={handleLogin} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue'}}>Đăng nhập</Button>
        )}
        <Button onClick={handleSwitchToNotary} style={{marginLeft: '20px', marginRight: '30px'}}>Chuyển sang Notary</Button> {/* Nút này sẽ chuyển đổi sang trạng thái Notary */}
      </div>
    </Header>
  );
}

export default AppHeader;
