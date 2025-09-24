import React from "react";
import ProjectImageOne from "../../assets/images/project-image-1.png";
import ProjectImageTwo from "../../assets/images/Portfolio.png";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  const ProjectData = [
    {
      Caption: "Featured  Project",
      title: "Example Project",
      paragrapgh:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of ecommended tracks based on your existing playlists and more.",
      image: ProjectImageOne,
    },
    {
      Caption: "Featured  Project",
      title: "Example Project",
      paragrapgh:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of ecommended tracks based on your existing playlists and more.",
      image: ProjectImageTwo,
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        {ProjectData.map((item, index) => {
            return (
                <ProjectCard
                    className={index % 2 == 0 ? 'odd-class' : ''}
                    caption={item.Caption}
                    title={item.title}
                    paragraph={item.paragrapgh}
                    image={item.image}
                />
            );
        })}
      </div>
    </div>
  );
}

export default Projects;
