import React, { Component } from 'react';

import ColorBox from './ColorBox';
import CInput from './CInput';

const style = {

  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      r: 0,
      g: 0,
      b: 0,
    }

    this.updateNum = this.updateNum.bind(this);
  }

  updateNum(color){
    return (num) => {
      this.setState( prevState => ({
        [color]: num
      }));
    }
  }

  render(){
    const { r, g, b} = this.state;

    return(
      <div style={style.col}>
        <ColorBox r={r} g={g} b={b}/>
        <div style={style.row}>
          <CInput color="R" passNum={this.updateNum("r")}/>
          <CInput color="G" passNum={this.updateNum("g")}/>
          <CInput color="B" passNum={this.updateNum("b")}/>
        </div>
      </div>
    );
  }
}

export default App;
