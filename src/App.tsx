import React from "react";
import classes from "./App.module.css";
import { Provider } from "./StateManagement/StateManagement";

import Graph from "./Components/Graph/Graph";
import DataSetController from "./Components/DataSetController/DataSetController";

// All the CSS classes are defined separately according to the BEM style
const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Labforward: peak detection</div>
      <Provider>
        <DataSetController></DataSetController>
        <Graph></Graph>
      </Provider>
    </div>
  );
};

export default App;
