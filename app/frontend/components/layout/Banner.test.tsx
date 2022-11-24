import React from "react";
import renderer from "react-test-renderer";

import Banner from "./Banner";

describe('<Banner />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Banner />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});
