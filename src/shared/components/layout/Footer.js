import React from 'react';
// Since we don't have props, we can directly return our JSX.
const Footer = () => (
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

export default Footer;