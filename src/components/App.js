import React, { Component } from 'react';

import Box from './Box';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }

    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(event){
    const { clientX, clientY } = event;

    console.log(clientX + ", " + clientY);

    this.setState( () => ({
      x: clientX,
      y: clientY,
    }));
  }

  render(){
    return(
      <Box r={50} g={100} b={200} x={this.state.x} y={this.state.y} func={this.onDrag}/>
    );
  }
}

export default App;
