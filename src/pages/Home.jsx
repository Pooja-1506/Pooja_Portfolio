import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home typewriter">
      <h1>Hello, I'm <span>Pooja Ingalagi</span></h1>
      <p>A passionate <span>Full-Stack Web Developer</span> creating modern web experiences.</p>
      <a href="/projects" className="btn">View My Work</a>
    </section>
  );
};

export default Home;
