import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";
import BookingForm from "./BookingForm";

test("Renders the BookingPage heading", () => {
  render(
    <BookingPage availableTimes={["17:00", "18:00", "19:00"]} dispatch={() => {}} />
  );

  const headingElement = screen.getByText("Reserve a Table"); // Adjust text if needed
  expect(headingElement).toBeInTheDocument();
});

