import React, { useState, useContext } from 'react';
import {
    DoubleRightOutlined,
    DoubleLeftOutlined,
    HomeOutlined,
    TeamOutlined,
    LaptopOutlined,
    ShopOutlined,
    SettingOutlined,
    HighlightOutlined
} from '@ant-design/icons';
import { Layout, Menu, Switch } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as PlayStation} from '../app_images/PlayStation.svg';
import { ReactComponent as PlayStationSmall} from '../app_images/PlayStation-Small.svg';
import { ThemeContext } from '../App';

function SideBar() {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const {themeMod, setThemeMod, themeColors} = useContext(ThemeContext)
    const NavItems = [
        {
        key: '/',
        icon: <HomeOutlined />,
        label: "Home",
        },
        {
            key: '/users',
            icon: <TeamOutlined />,
            label: "Users",
        },
        {
            key: '/devices',
            icon: <LaptopOutlined />,
            label: "Devices",
        },
        {
            key: '/market',
            icon: <ShopOutlined />,
            label: "Market",
        },
        {
            key: '/settings',
            icon: <SettingOutlined />,
            label: "Settings",
        },
        {
        key: '/olddesign',
        icon: <HighlightOutlined />,
        label: "Old Design",
        },
        {
        key: '/images',
        icon: <SettingOutlined />,
        label: "Images",
        },
    ];

    const asideLightStyle = {
        background: 'rgba(158, 158, 158, 0.25)',
        backdropFilter: "blur(5px)"
    }


    return (
    <Layout.Sider trigger={null} /* theme={themeMod} */ style={themeMod === 'dark' ? {background: themeColors.mainBg} : asideLightStyle} collapsible collapsed={collapsed}>
        <div className="logo">
            {collapsed ? 
                <PlayStationSmall style={{maxWidth: '100%', fill: themeMod === 'dark' ? themeColors.text : themeColors.blackText, height: 60}} /> :
                <PlayStation style={{maxWidth: '100%', fill: themeMod === 'dark' ? themeColors.text : themeColors.blackText, height: 60}} />
            }
        </div>
        <Menu
        theme={themeMod}
        style={{background: themeMod === 'dark' ? themeColors.mainBg : 'transparent'}}
        mode="inline"
        onSelect={({key}) => navigate(key)}
        defaultSelectedKeys={[location.pathname]}
        items={NavItems}
        />

        <Switch
                checked={themeMod === 'dark'}
                onChange={value => setThemeMod(value ? 'dark' : 'light')}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                style={{width: 60}}
            />

        <span className='trigger' style={{color: themeMod === 'dark' ? themeColors.text : themeColors.blackText}} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <DoubleRightOutlined /> : (<><DoubleLeftOutlined /><span>&nbsp;&nbsp;Shrink</span></>)}
        </span>

    </Layout.Sider>
    );
}

export default SideBar;