import React from 'react';

const style = {
    width: 20,
    height: 20,
};

const Box = ({r, b, g, x, y, mousefunc, clickfunc}) => (
    <button style={ {...style, ...{ 
        background: `rgb(${r},${g},${b})`,
        width: `${20+x}px`,
        height: `${20+y}px`,
    }} }
    onClick={clickfunc}
    onMouseMove={mousefunc}/>
);

export default Box;