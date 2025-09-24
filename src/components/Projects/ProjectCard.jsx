import React from "react";

function ProjectCard({ title, caption, image, paragraph, className }) {
  return (
    <div className={className + ' ' + 'card-project'}>
      <div className="image-blk">
        <img src={image} alt="project-image" />
      </div>
      <div className="content">
        <h5>{caption}</h5>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
