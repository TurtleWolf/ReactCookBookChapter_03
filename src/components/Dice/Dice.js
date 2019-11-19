import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
constructor() {
super();

    this.state = {
show: false
    };
  }

componentWillUpdate(newProps, newState) {
if (!newState.show) {
      document.getElementById('fade').style = 'opacity: 1;';
    } else {
      document.getElementById('fade').style = 'opacity: 0;';
    }
  }

toggleCollapse = () => {
    this.setState({
show: !this.state.show
    });
  }

render() {
return (
      <div className="Dice">
        <button onClick={this.toggleCollapse}>
          {this.state.show ? 'Dice' : 'Roll'}
        </button>

        <div 
          id="fade" 
          className={
            this.state.show ? 'transition show' : 'transition'
          }
        >
This text will disappear
        </div>
      </div>
    );
  }
}

export default Dice;