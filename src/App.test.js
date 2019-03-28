import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("The App component", () => {
  it("App component should hide jokeAnswer when hide joke answer button clicked", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    fireEvent.change(getByPlaceholderText(/Add todo/i), {
      target: { value: "Pineapples for sale" }
    });
    fireEvent.click(getByText(/Submit/i));
    const pineapplesTodo = getByText(/Pineapples for sale/i);
    const task3Todo = getByText(/task3/i);
    expect(pineapplesTodo).toBeInTheDocument();
    expect(task3Todo).toBeInTheDocument();
  });
});
