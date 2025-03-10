import React from "react";
import "./index.css";

const specialsData = [
  { title: "Greek Salad", img: "/images/greek-salad.jpg" },
  { title: "Bruschetta", img: "/images/bruschetta.png" },
  { title: "Lemon Dessert", img: "/images/lemon-dessert.jpg" },
];

function Specials() {
  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-container">
        {specialsData.map((special, index) => (
          <div className="special-card" key={index}>
            <img src={special.img} alt={special.title} />
            <h3>{special.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
