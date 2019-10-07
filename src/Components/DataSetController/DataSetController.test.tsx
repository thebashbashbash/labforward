import React from "react";
import ReactDOM from "react-dom";
import DataSetController from "./DataSetController";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DataSetController />, div);
  ReactDOM.unmountComponentAtNode(div);
});
