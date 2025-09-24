import React from "react";
import skills from "../../assets/images/skills.png";
function Image() {
  return (
    <div className="image__wrapper">
      <img src={skills} className="image" alt="skills" />
    </div>
  );
}
export default Image;
