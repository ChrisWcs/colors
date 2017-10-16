import React from 'react';

const style = (r, g, b) => ({
    width: 300,
    height: 300,
    background: `rgb(${r},${g},${b})`
});

const ColorBox = ({r, g, b}) => (
    <div style={style(r, g, b)} />
);

export default ColorBox;