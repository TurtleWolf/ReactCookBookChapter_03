import React from 'react';
    // We import our Home component here...
    import Home from './Home/Home';
    import ToDo from './ToDo/ToDo';
    import Timer from './Pomodoro/Timer';
// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to TurtleWolfe.com" />      
      <Content>
            {/* Here we add our Home component to be render it */}
            <Home />
            <ToDo />
            <Timer />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
