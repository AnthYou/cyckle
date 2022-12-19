import React from "react";
import renderer from "react-test-renderer";

import AvailableBikes from "./AvailableBikes";

describe('<AvailableBikes />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<AvailableBikes />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});
