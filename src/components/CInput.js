import React, { Component } from 'react';

const style = {
    col: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
    },
    text: {
        fontFamily: "Arial"
    }
}

class CInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { value } = event.target;

        this.setState( () => ({
            value,
        }));

        const num = Number.parseInt(value);

        if( num === NaN ) {
            this.props.passNum(0);
        } else {
            this.props.passNum(num);
        }
    }

    render(){
        return(
            <div style={style.col}>
                <h1 style={style.text}>{this.props.color}</h1>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default CInput;