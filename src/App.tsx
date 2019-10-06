import React from 'react';
import './App.css';

import Graph from "./Components/Graph/Graph"

import {getDataSet1, getDataSet2, getDataSet3} from './DateRepository/DataRepository'

const App: React.FC = () => {
  return (
    <div className="App">
      <Graph></Graph>
    </div>
  );
}

export default App;
