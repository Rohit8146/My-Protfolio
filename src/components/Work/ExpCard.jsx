import React from "react";
import image from "../../assets/images/work-exp-1.png";
import Button from "../Button/Button";

function ExpCard({ title, image, para }) {
  return (
    <div className="detail-card">
      <img src={image} className="card-image" alt="card-image" />
      <div className="content">
        <h3>{title}</h3>
        <p>{para}</p>
        <Button title="Learn More" />
      </div>
    </div>
  );
}

export default ExpCard;
