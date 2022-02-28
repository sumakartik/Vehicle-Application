import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test('renders a VIN response', () => {
  render(<App />);
  const linkElement = screen.getByText(/Volkswagen Beetle Dancing GIF/i);
  expect(linkElement).toBeInTheDocument();
});
