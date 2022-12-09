import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import store from "@/store/index";
import Signup from "./Signup";

describe("<Signup />", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
