import React, { useContext } from "react";
import { Col, Row, Typography } from 'antd';
import { ThemeContext } from "../../App";
import Unit from '../../componenets/Unit';
import Shapes from '../../app_images/shapes.png';

const { Title } = Typography;

function Home() {

    const { themeColors } = useContext(ThemeContext)
    const style = {
        paddingBottom: 15,
        display: 'grid',
        gap: 15,
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)', // TODO: Calc Rows Auto
    }

    return (<>
        <Row justify='space-between' align='center' style={{marginBlock: '5px 15px'}}>
            {/* TODO: Fix Color */}
            <Col style={{display: 'flex', alignItems: 'center'}}><Title style={{color: themeColors.text, margin: 0}}>Home</Title></Col>
            <Col style={{display: 'flex', alignItems: 'center'}}><img width='150' style={{filter: `drop-shadow(2px 4px 5px ${themeColors.text})`}} src={Shapes} alt='Controls' /></Col>
        </Row>
        <div style={style}>
            {Array(21).fill(0).map((item, ind) => <Unit key={ind} index={ind} unitType={ind < 7 ? 'pc' : ind >= 7 && ind < 14  ? 'ps4' : 'ps5'} />)}
        </div>
    </>);
}

export default Home;