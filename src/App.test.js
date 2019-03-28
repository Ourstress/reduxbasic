import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("The UserProfile component rendered by App", () => {
  it("should render user profile info from the Redux store", () => {
    const { getByText } = render(<App />);
    const country = getByText("UK");
    const name = getByText(/Jane Doe/i);
    expect(country).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
