    import React, { Component } from 'react';
    // We import our Home.css file here
    import './Home.css';
    export default class Home extends Component {
      constructor() {
        // We need to define super() at the beginning of the 
        // constructor to have access to 'this'
        
        super();
        // Here we initialize our local state as an object
        this.state = {
          name: 'Carlos'
        };
      }      

      componentDidMount() {
        setTimeout(() => {
          this.setState({
          name: 'TurtleWolfe' // Here we update the value of the state
                });
              }, 1000);
            }

  render() {

  // Style object...
  const buttonStyle = {
  color: 'black',
  backgroundColor: 'red',
  border: '1px solid black'
      };
  
  console.log('Name:', this.state.name);

  return (
  <div className="Home">
  <h1>I'm Home Scaffolding Component</h1>

          <p>
            In this recipe you will learn how to add styles to 
            components. If you want to learn more you can visit 
            our Youtube Channel at 
            <a href="http://youtube.com/codejobs"> Codejobs</a>.
          </p>
          {/* Here we render our state name */}
          <p>My Friends call me {this.state.name}</p>
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

