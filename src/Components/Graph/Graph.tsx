import React from "react";

import {
  VictoryArea,
  VictoryChart,
  VictoryAxis
  // VictoryZoomContainer
} from "victory";

import { Consumer } from "../../StateManagement/StateManagement";

import classes from "./Graph.module.css";

const Graph = () => {
  return (
    <Consumer>
      {appContext => (
        <div className={classes.container}>
          <VictoryChart
            height={300}
            width={400}
            // domain={{ y: [1, Math.max(...appContext.state.data)] }}
            // containerComponent={
            //   <VictoryZoomContainer
            //     zoomDomain={{
            //       x: [0, 50],
            //       y: [0, Math.max(...appContext.state.data)]
            //     }}
            //   />
            // }
          >
            <VictoryAxis
              crossAxis
              tickValues={appContext.state.data.map((_, index) => index + 1)}
              style={{
                grid: { stroke: "rgba(68, 71, 90, 0.7)" },
                tickLabels: { fontSize: 8, padding: 3 }
              }}
              fixLabelOverlap
            />

            <VictoryAxis
              dependentAxis
              style={{
                grid: { stroke: "rgba(40, 52, 54, 0.7)" },
                tickLabels: { fontSize: 8, padding: 3 }
              }}
              fixLabelOverlap
            />
            <VictoryArea
              style={{ data: { fill: "rgba(98, 114, 164,1)" } }}
              data={appContext.state.data}
              y="data"
            />
            <VictoryArea
              style={{ data: { fill: "rgba(139, 233, 253, 0.8)" } }}
              data={appContext.state.signal}
              y="signal"
            />
          </VictoryChart>
        </div>
      )}
    </Consumer>
  );
};

export default Graph;
