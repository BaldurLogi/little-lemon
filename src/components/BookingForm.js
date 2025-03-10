import React, { useState } from "react";
import "../index.css";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDateStr = e.target.value; // String, e.g., "2025-03-10"
    const selectedDateObj = new Date(selectedDateStr);
    setDate(selectedDateStr);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDateObj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))
        ) : (
          <option disabled>Loading times...</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
