import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CallToAction() {
  const navigate = useNavigate(); // ✅ React Router navigation

  return (
    <section className="call-to-action">
      <h1>Welcome to Little Lemon</h1>
      <p>Delicious Mediterranean food made with love.</p>
      <button
        aria-label="Reserve a Table"
        onClick={() => navigate("/booking")}
      >
        Reserve a Table
      </button>
    </section>
  );
}

export default CallToAction;
