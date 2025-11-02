import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
