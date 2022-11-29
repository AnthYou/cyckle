import React from "react";
import renderer from "react-test-renderer";

import Signup from "./Signup";

describe("<Signup />", () => {
  it("should render correctly", () => {
    const component = renderer.create(<Signup />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
