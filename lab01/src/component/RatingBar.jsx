import React from "react";
function RatingBar({ rate = 0 }) {
  const stars = Array.from({ length: 10 }, (_, i) => (i < rate ? "★" : "☆"));
  return (
    <div aria-label={`rating ${rate}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{ color: "#f5c518", fontSize: "1.1rem", marginRight: 4 }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default RatingBar;
