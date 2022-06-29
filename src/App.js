import React from 'react';
import ChartContainer from './containers/ChartContainer';
import ChartList from './components/ChartList';
import ListItem from './components/ListItem';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>UK Top 20 Chart List</h1>
      <ChartContainer />
    </div>
  )
}

export default App;
