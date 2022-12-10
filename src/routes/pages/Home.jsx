import React from "react";
import { Col, Row, Typography } from 'antd';
import PS4Unit from '../../componenets/Playstation4Unit';
import PS5Unit from '../../componenets/Playstation5Unit';
import Shapes from '../../shapes.png';

const { Title } = Typography;

function Home() {

    return (<>
        <Row justify='space-between' align='center' style={{marginBlock: '5px 15px'}}>
            <Col style={{display: 'flex', alignItems: 'center'}}><Title style={{color: '#FFF', margin: 0}}>Home</Title></Col>
            <Col style={{display: 'flex', alignItems: 'center'}}><img width='150' src={Shapes} alt='Controls' /></Col>
        </Row>
        <Row gutter={[16, 16]} style={{paddingBottom: 15}}>
            {Array.from(Array(3)).fill(0).map((item, ind) => <PS4Unit key={ind} index={ind} />)}
            {Array.from(Array(3)).fill(0).map((item, ind) => <PS5Unit key={ind} index={ind} />)}
        </Row>
    </>);
}

export default Home;