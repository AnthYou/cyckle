import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

describe('<Home />', () => {
  it('should render the title', () => {
    render(<Home />);

    const logo = screen.getByText('et si on louait un vélo', { exact: false });
    expect(logo).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});
