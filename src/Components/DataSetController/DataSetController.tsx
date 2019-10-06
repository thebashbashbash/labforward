import React from 'react'
import { Consumer, Action } from '../../StateManagement/StateManagement';

import Button from '@material-ui/core/Button';

import {dataSet1, dataSet2, dataSet3} from '../../DateRepository/DataRepository'

interface Props {
}

const DataSetController = (props: Props) => {

  const changeDataSet = (dispatch: (action: Action ) => void, data: number[], signal: number[]) => {
    dispatch({type:"setNewDataSet", newState : {data, signal}});
  }

  return (
    <Consumer>
        {appContext => (
      <div> 
        <Button 
          variant="contained" 
          onClick={() => changeDataSet(appContext.dispatch, dataSet1.data.data, dataSet1.data.signal)}>
          Dataset 1
        </Button>

        <Button 
        variant="contained"
        onClick={() => changeDataSet(appContext.dispatch, dataSet2.data.data, dataSet2.data.signal)}>
          Dataset 2
        </Button>

        <Button 
        variant="contained"
        onClick={() => changeDataSet(appContext.dispatch, dataSet3.data.data, dataSet3.data.signal)}>
          Dataset 3
        </Button>
      </div>
    )}
    </Consumer>
  )
}

export default DataSetController;
