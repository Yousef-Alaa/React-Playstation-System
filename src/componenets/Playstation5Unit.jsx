import React from 'react';
import { Col, Row, Card, Button, Typography, message, Tooltip, Dropdown, Space } from 'antd';
import Icon, {
    PauseOutlined,
    PoweroffOutlined,
    ShoppingCartOutlined,
    DownOutlined
} from '@ant-design/icons';

import { ReactComponent as PlayStation} from '../PS5.svg';
import { ReactComponent as ConsoleWithGamePad} from '../playstation-5.svg';
import { ReactComponent as PlaySolid} from '../play-solid.svg';

const { Text } = Typography;

export default function PS5({index}) {

    const items = [
        {key: '1', label: '1st item', icon: <PoweroffOutlined />},
        {key: '2', label: '2nd item', icon: <PoweroffOutlined />},
        {key: '3', label: '3rd item', icon: <PoweroffOutlined />,
        children: [
            {
            key: '3-1',
            label: '3rd menu item',
            },
            {
            key: '3-2',
            label: '4th menu item',
            },
        ]
    },
    ];
    
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    return (
        <Col className="gutter-row" xs={12} sm={8} xl={6}>
                    <Card bordered={false} style={{background: '#001529', boxShadow: '0 0 2px #fff, 0 0 5px rgb(255 255 255 / 50%)'}} bodyStyle={{padding: 12}}>
                        <Row justify='space-between' align='middle' style={{borderBottom: '1px solid #CCC', paddingBottom: 2}}>
                            <PlayStation style={{maxWidth: 120, fill: '#FFF', height: 30, position: 'relative', left: -10}} />
                            <Text style={{fontSize: 18, color: '#FFF', fontWeight: 'bold'}}>{index + 1 < 10 ? `0${index+1}` : index + 1 }</Text>
                        </Row>
                        <Row justify='space-between' style={{color: '#FFF', fontWeight: "bold", paddingBlock: 20}}>
                            <Col span={11}>
                                <ConsoleWithGamePad style={{fill: 'rgb(255 255 255 / 90%)', maxWidth: '100%'}} />
                            </Col>
                            <Col span={11} style={{display: 'flex', flexDirection: "column", justifyContent: 'flex-end'}}>
                                <Text style={{color: '#FFF'}}>Time: <span style={{color: '#ff6666'}}>01:15</span></Text>
                                <Text style={{color: '#FFF'}}>Mode: <span style={{color: '#ff69f8'}}>Single</span></Text>
                                <Text style={{color: '#FFF'}}>Price: <span style={{color: '#40e2a0'}}>15$</span></Text>
                            </Col>
                        </Row>
                        <Row align='middle' style={{borderTop: '1px solid #CCC', paddingTop: 10, justifyContent: "space-evenly"}}>
                            {/* TODO: The Condition */}
                            <Tooltip title={index % 2 === 0 ? 'Start' : "Pause"}>
                                <Button type="primary" shape="circle">
                                {index % 2 === 0 ? <Icon component={PlaySolid} /> : <PauseOutlined />}
                                </Button>
                            </Tooltip>
                            <Tooltip title="End">
                                <Button type="primary" shape="circle">
                                    <PoweroffOutlined />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Buy Item">
                                <Button type="primary" ghost={true} shape="circle">
                                    <ShoppingCartOutlined />
                                </Button>
                            </Tooltip>
                            <Dropdown menu={{ items, onClick: handleMenuClick }}>
                                <Space style={{
                                rowGap: '6px',
                                color: '#FFF',
                                fontSize: '16px',
                                cursor: 'pointer',
                                marginLeft: '15px'}}>
                                    Actions
                                    <DownOutlined />
                                </Space>
                            </Dropdown>
                        </Row>
                    </Card>
                </Col>
    )
}