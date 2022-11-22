import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

it('should render the title', () => {
  // Arrange
  render(<Home />);

  // Act

  // Assert
  const logo = screen.getByText('et si on louait un vélo', { exact: false });
  expect(logo).toBeInTheDocument();
});
