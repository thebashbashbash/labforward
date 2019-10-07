import React from "react";
import { Consumer, Action } from "../../StateManagement/StateManagement";

import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  dataSet1,
  dataSet2,
  dataSet3
} from "../../DateRepository/DataRepository";

interface Props {}

const DataSetController = (props: Props) => {
  const changeDataSet = (
    dispatch: (action: Action) => void,
    data: number[],
    signal: number[]
  ) => {
    dispatch({ type: "setNewDataSet", newState: { data, signal } });
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const [value, setValue] = React.useState("female");

  return (
    <Consumer>
      {appContext => (
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="position"
              name="position"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Top"
                labelPlacement="top"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Start"
                labelPlacement="start"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Bottom"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="End"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            onClick={() =>
              changeDataSet(
                appContext.dispatch,
                dataSet1.data.data,
                dataSet1.data.signal
              )
            }
          >
            Dataset 1
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              changeDataSet(
                appContext.dispatch,
                dataSet2.data.data,
                dataSet2.data.signal
              )
            }
          >
            Dataset 2
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              changeDataSet(
                appContext.dispatch,
                dataSet3.data.data,
                dataSet3.data.signal
              )
            }
          >
            Dataset 3
          </Button>
        </div>
      )}
    </Consumer>
  );
};

export default DataSetController;
