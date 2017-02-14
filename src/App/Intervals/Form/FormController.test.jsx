import React from "react";
import { shallow } from "enzyme";
import keys from "lodash/keys";
import FormController from "./FormController";

describe("FormController", () => {
  const Mock = props => <span>{ props.children }</span>;
  const subject = shallow(
    <FormController>
      <Mock />
    </FormController>
  );
  const child = () => subject.find("Mock");
  const expectStateAndPropsToMatch = (key, value) => {
    expect(subject.state()[key]).toBe(value);
    expect(child().props()[key]).toBe(value);
  }

  describe("form values", () => {
    const expectedFormNames = expect.arrayContaining([
      "interval_name",
      "start_milestone",
      "end_milestone",
    ]);

    it("maintains form values in its state", () => {
      expect(keys(subject.state())).toEqual(expectedFormNames);
    });

    it("passes required form values to children", () => {
      expect(keys(child().props()))
        .toEqual(expectedFormNames);
    });
  });

  describe("handleChange", () => {
    it("passes a handleChange callback to it's children", () => {
      expect(subject.instance().handleChange).toBeInstanceOf(Function);
      expect(child().prop("handleChange")).toBe(subject.instance().handleChange);
    });

    it("updates state with the name and value of the target recieved in the event", () => {
      expectStateAndPropsToMatch("interval_name", "");

      const mockEvent = {
        target: {
          name: "interval_name",
          value: "changed value"
        }
      };
      subject.instance().handleChange(mockEvent);

      expectStateAndPropsToMatch("interval_name", "changed value");
    });
  });
});
