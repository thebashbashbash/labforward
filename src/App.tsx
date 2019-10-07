import React from "react";
import classes from "./App.module.css";
import { Provider } from "./StateManagement/StateManagement";

import Graph from "./Components/Graph/Graph";
import DataSetController from "./Components/DataSetController/DataSetController";

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Labforward Graph</div>
      <Provider>
        <DataSetController></DataSetController>
        <Graph></Graph>
      </Provider>
    </div>
  );
};

export default App;
