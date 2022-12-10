import React, { useState } from 'react';
import {
    DoubleRightOutlined,
    DoubleLeftOutlined,
    HomeOutlined,
    TeamOutlined,
    LaptopOutlined,
    ShopOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';
import TheRoutes from './routes';
import { ReactComponent as PlayStation} from './PlayStation.svg';
import { ReactComponent as PlayStationSmall} from './PlayStation-Small.svg';
import './App.scss';
import { useEffect } from 'react';

const { Sider, Content } = Layout;

function App() {

    const [themeColor] = useState('#2980B9');
    const [collapsed, setCollapsed] = useState(false);
    const [activeItemKey, setActiveItemKey] = useState(null);
    const NavItems = [
        {
        key: '1',
        icon: <HomeOutlined />,
        label: <NavLink data-key='1' to='/'>Home</NavLink>,
        },
        {
        key: '2',
        icon: <TeamOutlined />,
        label: <NavLink data-key='2' to='users'>Users</NavLink>,
        },
        {
        key: '3',
        icon: <LaptopOutlined />,
        label: <NavLink data-key='3' to='devices'>Devices</NavLink>,
        },
        {
        key: '4',
        icon: <ShopOutlined />,
        label: <NavLink data-key='4' to='market'>Market</NavLink>,
        },
        {
        key: '5',
        icon: <SettingOutlined />,
        label: <NavLink data-key='5' to='settings'>Settings</NavLink>,
        },
        {
        key: '6',
        icon: <SettingOutlined />,
        label: <NavLink data-key='6' to='images'>Img</NavLink>,
        },
    ];


    useEffect(() => {

        let activeItemKeyd = document.querySelector('.ant-menu-item .active').dataset.key;
        setActiveItemKey(activeItemKeyd)
        
    }, [])

    return (
            <ConfigProvider
            theme={{
            token: { colorPrimary: themeColor }
            }}>
            <Layout style={{height: '100vh'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">
                        {collapsed ? 
                            <PlayStationSmall style={{maxWidth: '100%', height: 60}} /> :
                            <PlayStation style={{maxWidth: '100%', height: 60}} />
                        }
                    </div>
                    <Menu
                    theme="dark"
                    mode="inline"
                    onSelect={({key}) => setActiveItemKey(key)}
                    selectedKeys={[activeItemKey]}
                    items={NavItems}
                    />

                    <span className='trigger' onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <DoubleRightOutlined /> : (<><DoubleLeftOutlined /><span>&nbsp;&nbsp;Shrink</span></>)}
                    </span>

                </Sider>
                <Layout className="site-layout" style={{background: '#001529', borderLeft: '2px solid #f5f5f5', overflow: 'hidden scroll'}}>
                    <Content style={{padding: 10, color: '#FFF'}}>
                        <TheRoutes />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
export default App;