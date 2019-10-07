import React from 'react'

import { VictoryArea, VictoryChart } from 'victory';

import { Consumer } from '../../StateManagement/StateManagement';

interface Props {
  
}

const Graph = () => {
  return (
    <Consumer>
        {appContext => (
      <div>
        {appContext.state.data}
        <br/>
        {appContext.state.signal}
        <div>
        <VictoryChart>
          <VictoryArea
            style={{ data: { fill: "#c43a31" } }}
            data={appContext.state.data}
            y="data"
          />
        <VictoryArea
            data={appContext.state.signal}
            y="signal"
        />
        </VictoryChart>
        </div>
      </div>
    )}
    </Consumer>
  )
}

export default Graph;
