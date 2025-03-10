import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // ✅ Use MemoryRouter for testing
import App from "./App";

test("Renders the homepage heading", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/welcome to little lemon/i); // Adjust if needed
  expect(headingElement).toBeInTheDocument();
});
