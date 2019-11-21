import React, { Component } from 'react';
import Dice from './Dice/Dice';
import Chat from './Chat/Chat';
// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //               }
  render() {
  return (
    <div className="App">
      <Header title="Chattain Ship & Crew" />      
      <Content>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Chat />
      </Content>
      <Footer />
    </div>
  );
  }
}

export default App;
