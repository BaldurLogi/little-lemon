import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Renders the homepage heading", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const headingElement = await screen.findByText(/Little Lemon/i);
  expect(heading).toBeInTheDocument();
});