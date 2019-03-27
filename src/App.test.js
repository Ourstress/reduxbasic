import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("The App component", () => {
  it("App component should render joke of the day", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Why did the cat cross the road?/i)).toBeInTheDocument();
    expect(
      getByText(/Because it saw something exciting on the other side/i)
    ).toBeInTheDocument();
  });
});
