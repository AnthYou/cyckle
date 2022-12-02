import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Login from "./Login";

describe("<Login />", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
