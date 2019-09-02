    import React, { Component } from 'react';
    // We import our Home.css file here
    import './Home.css';
    export default class Home extends Component {
render() {

// Style object...
const buttonStyle = {
  color: 'black',
  backgroundColor: 'red',
  border: '1px solid black'
        };

return (
  <div className="Home">
  <h1>I'm Home Scaffolding Component</h1>

          <p>
            In this recipe you will learn how to add styles to 
            components. If you want to learn more you can visit 
            our Youtube Channel at 
            <a href="http://youtube.com/codejobs"> Codejobs</a>.
          </p>
          <p>
          <button style={buttonStyle}>Click me!</button>
            <button 
              style={{
                color: 'yellow',
                backgroundColor: 'blue', 
                border: '1px solid black' 
              }}
            >
              Click me!
            </button>
          </p>
</div>
);
      }
    }

