import React from 'react'

import { VictoryArea, VictoryChart, VictoryLabel } from 'victory';

import { Consumer } from '../../StateManagement/StateManagement';

interface Props {
  
}

const Graph = () => {
  return (
    <Consumer>
        {appContext => (
        <VictoryChart>
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
    )}
    </Consumer>
  )
}

export default Graph;
