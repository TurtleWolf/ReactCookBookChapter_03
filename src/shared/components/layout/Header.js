import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

// We created a component with a simple arrow function.
const Header = props => {
const { 
      title = 'Welcome to React', 
      url = 'http://localhost:3000' 
    } = props;

return (
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
        <p>
        <code>
        you may reroll the dice three times<br></br>
        first six, then five and four<br></br>
        finally the rest is your cannon score
        </code>
        </p>
        <a href={url}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
    );
};
    // Even with Functional Components we are able to validate our 
  // PropTypes.
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
      };

export default Header;