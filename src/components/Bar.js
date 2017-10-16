import React, { Component } from 'react';

const style = {
    outer: {
        height: 255,
        width: 20,
        border: "solid black 1px"
    },

    inner: {
        width: 18,
        height: 10,
        marginTop: 0,
    },
};

class Bar extends Component {
    constructor(props){
        super(props);

        this.state = {
            amount: 0,
            pos: 0,
            canMove: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    handleClick(event){
        event.persist();
        console.log(event.pageY);
        if(this.state.canMove === false){
            this.setState( prevState => ({
                canMove: true,
                pos: event.pageY
            }));
        } else {
            this.setState( prevState => ({
                canMove: false,
            }));
        }
    }

    handleMove(event){
        event.persist();
        if(this.state.canMove === true){
            this.setState( prevState => ({
                amount: (prevState.amount + event.pageY - prevState.pos)
            }))
        }
    }


    render(){
        return(
            <div style={style.outer}>
                <button style={{ ...style.inner, ...{ marginTop: this.state.amount } }}
                        onMouseMove={this.handleMove}
                        onClick={this.handleClick}
                        ></button>
            </div>
        );
    }
}

export default Bar;