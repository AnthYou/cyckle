import React from "react";
import renderer from "react-test-renderer";
import { vi } from "vitest";

import Button from "./Button";

describe('<Button />', () => {
  it('should render correctly without providing a class', () => {
    const component = renderer.create(<Button color="primary" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render correctly providing a class', () => {
    const component = renderer.create(<Button color="primary" className="uppercase" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render correctly providing a class and an onClick property', () => {
    const component = renderer.create(<Button color="primary" className="uppercase" onClick={vi.fn} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});
