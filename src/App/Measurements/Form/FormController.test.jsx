import React from "react";
import { shallow } from "enzyme";
import keys from "lodash/keys";
import FormController from "./FormController";

describe("FormController", () => {
  const Mock = props => <span>{ props.children }</span>
  const subject = shallow(
    <FormController>
      <Mock />
    </FormController>
  );

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
      expect(keys(subject.find("Mock").props()))
        .toEqual(expectedFormNames);
    });
  });

  describe("handleChange", () => {
    it("passes a handleChange callback to it's children", () => {
      expect(subject.instance().handleChange).toBeInstanceOf(Function);
      expect(subject.find("Mock").prop("handleChange")).toBe(subject.instance().handleChange);
    });

    it("updates state with the name and value of the target recieved in the event", () => {
      expect(subject.state().interval_name).toBeNull();
      expect(subject.find("Mock").props().interval_name).toBeNull();

      const mockEvent = {
        target: {
          name: "interval_name",
          value: "changed value"
        }
      };
      const result = subject.instance().handleChange(mockEvent);

      expect(subject.state().interval_name).toBe("changed value");
      expect(subject.find("Mock").props().interval_name).toBe("changed value");
    });
  });
});
