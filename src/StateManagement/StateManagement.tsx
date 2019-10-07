import * as React from "react";

import { dataSet1 } from "../DateRepository/DataRepository";

export interface State {
  data: number[];
  signal: number[];
}

export enum ActionTypes {
  setNewDataSet = "setNewDataSet"
}

export type Action = { type: ActionTypes.setNewDataSet; newState: State };

// initialState could be moved to <App></App> instead for better overview
const initialState: State = {
  data: dataSet1.data.data,
  signal: dataSet1.data.signal
};

// Reducer could be moved to <App></App> instead for better overview
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.setNewDataSet: {
      return { data: action.newState.data, signal: action.newState.signal };
    }
    default:
      throw new Error("Action type not supported!");
  }
};

export const Context = React.createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

// Every child component in the root component of <App></App> that needs to consume changes needs to
// have this component in the root of that component
export const Consumer = Context.Consumer;

// The functional component Provider should be used in root component to emit changes
export const Provider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
