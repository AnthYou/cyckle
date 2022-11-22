import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import NavBar from "./NavBar";

describe("<NavBar />", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
