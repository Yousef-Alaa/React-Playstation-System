import React, { useState, useEffect, createContext } from 'react';
import { Layout, ConfigProvider } from 'antd';
import TheRoutes from './routes';
import SideBar from './componenets/SideBar';
import './App.scss';

export const ThemeContext = createContext(null)

function App() {

    const getColorsMap = isDark => {
        return {
            main: '#2980B9',
            mainBg: isDark ? '#001529' : "#FFF",
            text: '#FFF',
            blackText: '#000',
            textWithOpacity: function(opacity) {
                return `rgb(255 255 255 / ${opacity}%)`;
            },
            mainWithOpacity: function(opacity) {
                return `rgb(41 128 185 / ${opacity}%)`;
            }
        }
    };
    const token = {
        "colorPrimary": "#2980b9",
        // "colorTextBase": "#13C2C2",
        // "colorBgBase": "#eb2f96"
    }
    const [themeMod, setThemeMod] = useState('dark')
    const [themeColors, setColors] = useState(getColorsMap(themeMod === 'dark'));

    useEffect(() => {
        let colorsObj = getColorsMap(themeMod === 'dark')
        setColors(colorsObj)
    }, [themeMod])


    return (
        <ThemeContext.Provider value={{themeColors, setColors, themeMod, setThemeMod}}>
            <ConfigProvider theme={{ token }} >
                <Layout className={themeMod === 'dark' ? "site-layout" : 'site-layout light'}>
                    <SideBar />
                    <Layout style={{background: themeMod === 'dark' ? themeColors.mainBg : 'transparent' , borderLeft: '2px solid #f5f5f5', overflow: 'hidden scroll'}}>
                        <Layout.Content style={{padding: 10, color: themeColors.text}}>
                            <TheRoutes />
                        </Layout.Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};
export default App;