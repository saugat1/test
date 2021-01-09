import React, { Component } from 'react';
import "./changeBtn.css";

class ChangeText extends Component {
  constructor() {
    super();
    this.state = {
      myName: "nir bahadur rana",
    };
  }

  changeMe() {
    this.setState({
      myName: " saugat rana magar",
    });
  }

  changeHover() {
    this.setState({
      myName: " saugat rana magar hover",
    });
  }

  changeDouble() {
    this.setState({
      myName: " saugat rana magar double click",
    });
  }

  render() {
    return (
      <div className="changeBtn">
        <h2>{this.state.myName}</h2>
        <button onClick={() => this.changeMe()} onMouseEnter={() => this.changeHover()} onDoubleClick={()=> this.changeDouble()}>change the text</button>
      </div>
    );
  }
}

export default ChangeText;