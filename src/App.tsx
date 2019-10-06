import React from 'react';
import './App.css';
import { Provider } from './StateManagement/StateManagement';

import Graph from './Components/Graph/Graph';
import DataSetController from './Components/DataSetController/DataSetController'

const App: React.FC = () => {

  return (
  <div className="App">
    <Provider>
      <DataSetController></DataSetController>
      <Graph></Graph>
    </Provider>
  </div>
  );
}

export default App;
