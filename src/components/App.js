import React, { Component } from 'react';

import Box from './Box';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      x: 0,
      y: 0,
      toggled: false,
    }

    this.onDrag = this.onDrag.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  onDrag(event){
    if(this.state.toggled){
      const { clientX, clientY } = event;

      console.log(clientX + ", " + clientY);

      this.setState( () => ({
        x: clientX,
        y: clientY,
      }));
    }
  }

  handleclick(){
    this.setState((prevState)=>({
      toggled: !prevState.toggled
    }));
  }

  render(){
    return(
      <Box r={50} g={100} b={200} x={this.state.x} y={this.state.y} 
            mousefunc={this.onDrag} 
            clickfunc={this.handleclick}/>
    );
  }
}

export default App;
