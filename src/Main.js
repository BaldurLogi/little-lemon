import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from "./components/BookingPage";

export const fetchData = async (date) => {
  try {
    const dateObj = (date instanceof Date) ? date : new Date(date);
    return await window.fetchAPI(dateObj);
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};

export const initializeTimes = async () => {
  const today = new Date();
  return await fetchData(today);
};

export const updateTimes = async (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const dateObj = (action.payload instanceof Date) ? action.payload : new Date(action.payload);
    return await fetchData(dateObj);
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [apiLoaded, setApiLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAPI = setInterval(() => {
      if (typeof window.fetchAPI === "function") {
        clearInterval(checkAPI);
        setApiLoaded(true);
      }
    }, 100);

    return () => clearInterval(checkAPI);
  }, []);

  useEffect(() => {
    if (apiLoaded) {
      (async () => {
        const times = await initializeTimes();
        dispatch({ type: "SET_INITIAL_TIMES", payload: times });
      })();
    }
  }, [apiLoaded]);

  const submitForm = async (formData) => {
    try {
      const success = await window.submitAPI(formData);
      if (success) {
        navigate("/confirmed");  // Navigate to the confirmation page
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
}

export default Main;
