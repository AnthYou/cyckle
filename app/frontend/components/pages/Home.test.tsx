import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe('Home component', () => {
  it('should render the title', () => {
    render(<Home />);

    const logo = screen.getByText('et si on louait un vélo', { exact: false });
    expect(logo).toBeInTheDocument();
  });
});
