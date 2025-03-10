import React from "react";
import "./index.css";

const testimonials = [
  { name: "John Doe", review: "Amazing food and great service!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Jane Smith", review: "Absolutely loved the ambiance!", rating: "⭐⭐⭐⭐" },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.review}</p>
            <p>{testimonial.rating}</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
