import React, { Component } from 'react';
    // We import our Home component here...
    import Home from './Home/Home';
    import ToDo from './ToDo/ToDo';
    import Timer from './Pomodoro/Timer';
    import Coins from './Coins/Coins';
    import Notes from './Notes/Notes';
    import Chart from './Chart/Chart';
    import Animation from './Animation/Animation';
// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
  // This is our fake data...
  import { notes1, notes2 } from './Notes/data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    // The first time we load the notes1...
          this.state = {
    notes: notes1,
    chartType: 'line'
          };

          this.columns = [
            ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
            ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
            ['XRP', 100, 200, 300, 500, 400, 300],
          ];          
        }

    setBarChart = () => {
          this.setState({
    chartType: 'bar'
          });
        }
    
    setLineChart = () => {
          this.setState({
    chartType: 'line'
          });
        }        

    componentDidMount() {
    // After 10 seconds (10000 milliseconds) we concatenate our       
          // data with notes2...
    setTimeout(() => {
            this.setState({
    notes: [...this.state.notes, ...notes2]
            });
          }, 10000);
        }
  render() {
  return (
    <div className="App">
      <Header title="Welcome to TurtleWolfe.com" />      
      <Content>
            {/* Here we add our Home component to be render it */}
            <Home />
            <ToDo />
            <Timer />
            <Coins />
            <Notes notes={this.state.notes} />
            <Chart
              columns={this.columns} 
              chartType={this.state.chartType} 
            />

            <p>
              Chart Type
              <button onClick={this.setBarChart}>Bar</button>
              <button onClick={this.setLineChart}>Line</button>
            </p>
            <Animation />
      </Content>
      <Footer />
    </div>
  );
  }
}

export default App;
