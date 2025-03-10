import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Book your table online and enjoy a wonderful dining experience at Little Lemon.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;