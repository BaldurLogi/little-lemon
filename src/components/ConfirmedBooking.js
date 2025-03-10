import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed 🎉</h2>
      <p>Your table has been successfully booked. We look forward to seeing you!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ConfirmedBooking;
