import React from 'react'

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
      </div>
    )}
    </Consumer>
  )
}

export default Graph;
