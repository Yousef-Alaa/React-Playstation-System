import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import UnitsDataConfig from './UnitsConfig.js';
import { ThemeContext } from '../App';
import { ReactComponent as PCSVG} from '../app_images/PC.svg';
import { ReactComponent as PS4} from '../app_images/console-with-gamepad.svg';
import { ReactComponent as PS5} from '../app_images/playstation-5.svg';


export default function PC({index, unitType}) {

    const { unitIndexStyle } = UnitsDataConfig[unitType];
    const [open, setOpen] = useState(false);
    const { themeColors } = useContext(ThemeContext)
    const unitImgStyle = {
        fill: themeColors.textWithOpacity(75),
        filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, .8))',
        width: '100%',
        height: 115,
        position: 'relative',
        padding: unitType === 'ps4' ? '6px 6px 0' : ''
    }


    return (
    <>
        <div className='item' style={{position: 'relative'}} onClick={() => setOpen(true)}>
            <div style={{ 
                cursor: 'pointer',
                zIndex: 2,
                position: 'absolute',
                inset: 0
                }}></div>{/* This Div Is Overlay for prevent select images & text */}
            <span style={unitIndexStyle}>{index < 9 ? `0${index + 1}` : index + 1}</span>
            {
                unitType === 'pc' ? <PCSVG style={unitImgStyle} />
                : unitType === 'ps4' ? <PS4 style={unitImgStyle} />
                : unitType === 'ps5' ? <PS5 style={unitImgStyle} /> : null
                
            }
            <div style={{color: index % 2 === 0 ? '#40e2a0' : '#ff6666', fontSize: 16, display: 'block', textAlign: 'center'}}>01:15</div>
        </div>
        <Drawer
            title={`${unitType.toUpperCase()} Drawer ${index < 9 ? `0${index + 1}` : index + 1}`}
            placement='right'
            closable={false}
            onClose={() => setOpen(false)}
            open={open}
            key={`${unitType}-${index}`}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </>
    )
}