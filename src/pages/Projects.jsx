import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { name: "Zomato Clone", description: "A food ordering website built using React and API integration." },
    { name: "PetStore", description: "An e-commerce platform for pet products using React and Context API." },
    { name: "Personal Portfolio", description: "A responsive React-based portfolio showcasing my skills and projects." },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
