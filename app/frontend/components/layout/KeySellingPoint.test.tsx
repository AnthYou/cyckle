import React from "react";
import renderer from "react-test-renderer";

import KeySellingPoint from "./KeySellingPoint";
import Blob from "@/images/blob.svg";

describe("<KeySellingPoint />", () => {
  const defaultProps = {
    id: 1,
    title: "Test",
    content: "Lorem ipsum",
    image: Blob,
    alt: "This is a blob."
  };

  const wrapper = renderer.create(<KeySellingPoint {...defaultProps} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
