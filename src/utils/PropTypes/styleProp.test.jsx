import React from "react";
import { shallow } from "enzyme";
import styleProp from "./styleProp";


describe("styleProp PropType", () => {
  const icssStyles = {
    "classOne": "classOne",
    "classTwo": "classTwo",
    "classThree": "classThree",
  };

  const Stub = ({ styles }) => <div className={styles} />;
  Stub.propTypes = {
    styles: styleProp(icssStyles)
  };

  beforeEach(() => global.console = { error: jest.fn() });

  it("doesn't error when the prop is ommited", () => {
    shallow(<Stub />);

    expect(console.error).not.toBeCalled();
  });

  it("doesn't error when the prop is an empty object", () => {
    shallow(<Stub styles={{}} />);

    expect(console.error).not.toBeCalled();
  });

  it("doesn't errors when the a key of the prop is not a key in the styles object", () => {
    shallow(<Stub styles={{ notAClass: 33 }} />);

    expect(console.error).not.toBeCalled();
  });

  it("errors when prop is not an object", () => {
    shallow(<Stub styles="not what I want" />);

    expect(console.error).toBeCalledWith(
      "Warning: Failed prop type: Invalid prop `styles` of type `string` supplied to `Stub`, expected `object`.\n    in Stub"
    );
  });

  it("errors when the value of a class is not a string", () => {
    shallow(<Stub styles={{ classOne: 33 }} />);

    expect(console.error).toBeCalledWith(
      "Warning: Failed prop type: Invalid prop `styles.classOne` of type `number` supplied to `Stub`, expected `string`.\n    in Stub"
    );
  });
});
