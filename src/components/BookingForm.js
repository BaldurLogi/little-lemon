import React, { useState, useEffect } from "react";
import "../index.css";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Run validation when any field changes
  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Date is required.";
    if (!time) newErrors.time = "Time is required.";
    if (guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleDateChange = (e) => {
    const selectedDateStr = e.target.value;
    const selectedDateObj = new Date(selectedDateStr);
    setDate(selectedDateStr);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDateObj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table Reservation Form">
      <fieldset>
        <legend>Reserve a Table</legend>

        {/* Date Selection */}
        <div className="form-group">
          <label htmlFor="res-date">Choose Date:</label>
          <br></br>
          <input
            type="date" id="res-date" value={date}
            onChange={handleDateChange} required
            aria-required="true"
            aria-label="Select a date for reservation"
          />
          <br></br>
          {errors.date && <span className="error" aria-live="polite">{errors.date}</span>}
        </div>

        {/* Time Selection */}
        <div className="form-group">
          <label htmlFor="res-time">Choose Time:</label>
          <br></br>
          <select
            id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required
            aria-required="true"
            aria-label="Select a time slot"
          >
            <option value="">Select a time</option>
            {availableTimes.length > 0 ? (
              availableTimes.map((t, index) => <option key={index} value={t}>{t}</option>)
            ) : (
              <option disabled>Loading times...</option>
            )}
          </select>
          <br></br>
          {errors.time && <span className="error" aria-live="polite">{errors.time}</span>}
        </div>

        {/* Guests Selection */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <br></br>
          <input
            type="number" id="guests" min="1" max="10" value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))} required
            aria-required="true"
            aria-label="Select the number of guests"
          />
          <br></br>
          {errors.guests && <span className="error" aria-live="polite">{errors.guests}</span>}
        </div>

        {/* Occasion Selection */}
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <br></br>
          <select
            id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required
            aria-required="true"
            aria-label="Select an occasion type"
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <br></br>
          {errors.occasion && <span className="error" aria-live="polite">{errors.occasion}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={!isFormValid} aria-label="On Click">
          Make Your Reservation
        </button>

      </fieldset>
    </form>
  );
}

export default BookingForm;
