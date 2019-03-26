import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("The App component", () => {
  it("App component should render text initial state", () => {
    const { getByText } = render(<App />);
    expect(getByText("initial state")).toBeInTheDocument();
  });
});
