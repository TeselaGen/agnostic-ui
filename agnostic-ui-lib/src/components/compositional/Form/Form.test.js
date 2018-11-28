import React from "react";
import { shallow, mount } from "enzyme";
import { Form } from "./Form";

const mockFormElement = jest.fn(() => <div>Form Element</div>);
const mockFormStyle = jest.fn(props => <div>{props.children}</div>);
const mockFormLayout = jest.fn(props => <div>{props.children}</div>);

jest.mock("./FormElement", () => ({
  FormElement: mockFormElement
}));

jest.mock("./FormStyle", () => ({
  FormStyle: mockFormStyle
}));

jest.mock("./FormLayout", () => ({
  FormLayout: mockFormLayout
}));

describe("Form", () => {
  it("renders without crashing", () => {
    jest.clearAllMocks();
    const wrapper = shallow(<Form />);
    expect(wrapper).toHaveLength(1);
  });

  it("mounts without crashing", () => {
    jest.clearAllMocks();
    const wrapper = mount(<Form />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders FormElement with spec", () => {
    const spec = {
      elements: [{ example: 1 }]
    };
    jest.clearAllMocks();
    const wrapper = mount(<Form spec={spec} />);
    expect(wrapper).toHaveLength(1);
    expect(mockFormElement).toHaveBeenCalledTimes(1);
    expect(mockFormElement).toHaveBeenCalledWith({ spec });
  });

  it("renders FormElements", () => {
    const spec = {
      elements: [{ example: 1 }, { example: 2 }]
    };
    jest.clearAllMocks();
    const wrapper = mount(<Form spec={spec} />);
    expect(wrapper).toHaveLength(1);
    expect(mockFormElement).toHaveBeenCalledTimes(2);
  });
});
