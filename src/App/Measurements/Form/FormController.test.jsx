import React from "react";
import { shallow } from "enzyme";
import FormController from "./FormController";

const Mock = props => <span>{ props.children }</span>

it("renders without crashing", () => {
  expect(shallow(
    <FormController />
  ).find("div")).toBePresent();
});

it("renderes it's children", () => {
  const subject = shallow(
    <FormController>
      <Mock />
    </FormController>
  );

  expect(subject.find("Mock")).toBePresent();
});
