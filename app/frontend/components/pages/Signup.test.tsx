import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Signup from "./Signup";

describe("<Signup />", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
