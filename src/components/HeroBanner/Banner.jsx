import React from "react";
import BannerImage from "../../assets/images/banner-left-image.png";
import "./herobanner.css";
import TextDescription from "../Text-Description/TextDescription";

function Banner() {
  return (
    <div className="container">
      <div className="hero-banner">
        <div className="image_wrapper">
          <img src={BannerImage} alt="Banner" />
          <h3>
            Hello! I Am <span className="purple-text">Rohit Tandon</span>
          </h3>
        </div>
        <div className="content-side">
          <h5>A Developer who</h5>
          <h2>
            Judges a book
            <br />
            by its <span className="purple-text circle-image">cover...</span>
          </h2>
          <h6>Because if the cover does not impress you what else can?</h6>
        </div>
      </div>
      <TextDescription />
    </div>
  );
}

export default Banner;
