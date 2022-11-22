import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
