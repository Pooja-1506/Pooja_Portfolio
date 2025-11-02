import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        You can view or download my detailed resume below to know more about my education, experience, and skills.
      </p>
      <a
        href="/Pooja_Ingalagi_Resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View Resume
      </a>
    </section>
  );
};

export default Resume;
