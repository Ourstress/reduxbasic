import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("The App component", () => {
  it("App component should hide jokeAnswer when hide joke answer button clicked", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Click to reveal joke answer/i));
    fireEvent.click(getByText(/Click to hide joke answer/i));
    expect(
      getByText(/Because it saw something exciting on the other side/i)
    ).not.toBeInTheDocument();
  });
});
