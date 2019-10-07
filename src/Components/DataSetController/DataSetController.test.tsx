import React from "react";
import ReactDOM, { render } from "react-dom";
import { shallow, mount } from "enzyme";
import DataSetController from "./DataSetController";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DataSetController />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Mount DataSetController", () => {
  it("renders", () => {
    mount(<DataSetController />);
  });

  //TODO: DataSetController should be converted to a class component so the test
  // can be done directly on state and so that it is not so sensitive to dom changes
  it("when select third state then state is changed", () => {
    const wrapper = mount(<DataSetController />);
    let dataSet1Selector = wrapper.find("input").first();
    let dataSet3Selector = wrapper.find("input").last();
    let instructions = wrapper.find("#instructions");

    expect(instructions).toHaveLength(1);

    expect(instructions.get(0).props.children[1]).toEqual("data set 1");

    expect(dataSet1Selector.get(0).props.value).toEqual("data_set_1");

    expect(dataSet3Selector.get(0).props.value).toEqual("data_set_3");

    dataSet1Selector.simulate("focus");
    dataSet1Selector.simulate("change", { target: { value: "data_set_3" } });

    instructions = wrapper.find("#instructions");
    expect(instructions.get(0).props.children[1]).toEqual("data set 3");
  });
});
