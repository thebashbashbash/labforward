import * as React from "react";

export interface State {
  data: number[],
  signal: number[]
}

export type Action = { type: "setNewDataSet", newState : State};

const initialState: State = {
  data: [],
  signal: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "setNewDataSet": {
      return { data: action.newState.data, signal: action.newState.signal };
    }
    default:
      throw new Error();
  }
};

export const Context = React.createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

export const Consumer = Context.Consumer;

export const Provider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}

const vectorDotMultiplication = (a: number[], b: number[]) =>{

}


