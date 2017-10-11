import React from 'react';

const style = {
    width: 100,
    height: 100,
};

const Box = ({r, b, g, x, y, func}) => (
    <div style={ {...style, ...{ 
        background: `rgb(${r},${g},${b})`,
        width: `${100+x}px`,
        height: `${100+y}px`,
    }} }
    onDrag={func}/>
);

export default Box;