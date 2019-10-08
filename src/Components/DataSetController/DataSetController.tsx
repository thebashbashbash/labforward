import React from "react";
import {
  Consumer,
  Action,
  ActionTypes
} from "../../StateManagement/StateManagement";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  dataSet1,
  dataSet2,
  dataSet3,
  DataSetOptions
} from "../../DateRepository/DataRepository";

import classes from "./DataSetController.module.css";

// Change of state is handled through this controller class
// Should be rewritten as a class component to enable better testing with Enzyme
const DataSetController = () => {
  const changeDataSet = (
    dispatch: (action: Action) => void,
    data: number[],
    signal: number[]
  ) => {
    dispatch({ type: ActionTypes.setNewDataSet, newState: { data, signal } });
  };

  const handleChange = (
    event: {
      target: { value: React.SetStateAction<string> };
    },
    appContext: { dispatch: (action: Action) => void }
  ) => {
    switch (event.target.value) {
      case DataSetOptions.DataSet1: {
        changeDataSet(
          appContext.dispatch,
          dataSet1.data.data,
          dataSet1.data.signal
        );

        setValue(DataSetOptions.DataSet1);
        break;
      }
      case DataSetOptions.DataSet2: {
        changeDataSet(
          appContext.dispatch,
          dataSet2.data.data,
          dataSet2.data.signal
        );

        setValue(DataSetOptions.DataSet2);
        break;
      }
      case DataSetOptions.DataSet3: {
        changeDataSet(
          appContext.dispatch,
          dataSet3.data.data,
          dataSet3.data.signal
        );

        setValue(DataSetOptions.DataSet3);
        break;
      }
      default:
        throw new Error("Data set not supported!");
    }
  };

  const [value, setValue] = React.useState(DataSetOptions.DataSet1);
  const getCurrentDataSet = () => {
    return value;
  };

  return (
    <Consumer>
      {appContext => (
        <div className={classes.container}>
          <div id="instructions" className={classes.instructions}>
            Labforward peak detection detected 3 data sets in your workspace.
            Currently {kebabCaseToTitleCase(getCurrentDataSet())} is shown in the graph,
            select your data set below.
          </div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="data set"
              name="data_set"
              value={value}
              onChange={event => handleChange(event, appContext)}
              row
            >
              <FormControlLabel
                value={DataSetOptions.DataSet1}
                control={<Radio color="primary" />}
                label="Data set 1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value={DataSetOptions.DataSet2}
                control={<Radio color="primary" />}
                label="Data set 2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value={DataSetOptions.DataSet3}
                control={<Radio color="primary" />}
                label="Data set 3"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </Consumer>
  );
};

const kebabCaseToTitleCase = (kebabCaseString: string) => {
  return kebabCaseString
    .toLowerCase()
    .split("_")
    .join(" ");
};

export default DataSetController;
