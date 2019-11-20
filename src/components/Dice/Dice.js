import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 7,
    };
  }

  generateRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

render() {
return (
      <div className="Dice">
      <button
        className="square"
        onClick={
          () => this.setState(
            {value: this.generateRandom(1, 6)}
          )
        }>
        {this.state.value}
      </button>
      </div>
    );
  }
}

export default Dice;