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

});
