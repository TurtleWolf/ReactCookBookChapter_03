import React, { Component } from 'react';

class Footer extends Component {
render() {
return (
<footer>
<a
          className="App-link"
          href="https://TurtleWolfe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; TurtleWolfe.com {(new Date()).getFullYear()}
        </a>
</footer>
    );
  }
}

export default Footer;