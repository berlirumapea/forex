import React from "react";
import ForexHeader from "../../components/ForexHeader";
import { shallow } from "enzyme";

describe("<ForexHeader /> static data testing", () => {
  it("renders a paragraph element and has value of USD - United State Dollars", () => {
    const wrapper = shallow(<ForexHeader />);
    const p = wrapper.find("#title");
    expect(p).toBeDefined();
    expect(p.text()).toMatchSnapshot();
  });

  it("renders h3 element and has value of USD", () => {
    const wrapper = shallow(<ForexHeader />);
    const h3 = wrapper.find("h3");
    expect(h3).toBeDefined();
    expect(h3.text()).toMatchSnapshot();
  });

  it("has a input element with default value of 10.00", () => {
    const wrapper = shallow(<ForexHeader />);
    const input = wrapper.find("input");
    expect(input.props().value).toEqual(10.0);
  });

  it("renders a div with className == flex-between that wraps input element", () => {
    const wrapper = shallow(<ForexHeader />);
    let div = wrapper.find(".flex-between");
    let input = div.find("input.usd");
    expect(div).toBeDefined();
    expect(input).toBeDefined();
  });
});

describe("<ForexHeader /> user interactions testing", () => {
  it("updates the state when input has changed", () => {
    const wrapper = shallow(<ForexHeader />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: 20 } });
		expect(wrapper.state("val")).toEqual(20);
		input.simulate("change", { target: { value: 40 } });
		expect(wrapper.state("val")).toEqual(40);
  });
});
