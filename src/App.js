import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ContentComponent from './Components/Content/Content';
import Background from './Components/Content/open';
import AppFooter from './Components/Footer/Footer';
import EmailSubscription from './Components/Content/email';

const { Sider } = Layout;



function App() {
  return (
    <Router>
      <Layout className="layout">
        <AppHeader />
        <Background images={['slider_1.jpg', 'slider_2.jpg', 'slider_3.png' ]}/>
        <Layout>
          <Sider width={120} style={{ background: '#fff' }}>
            {/* Sidebar bên trái */}
          </Sider>
          <ContentComponent/>
          <Sider width={120} style={{ background: '#fff' }}>
            {/* Sidebar bên phải */}
          </Sider>
        </Layout>
        <EmailSubscription/>
        <AppFooter/>
      </Layout>
    </Router>
  );
}

export default App;
