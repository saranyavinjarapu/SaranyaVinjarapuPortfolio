import React from "react";
import "./About.css";
import svAbout from "../../assets/about_sv.png";

const About = () => {
  return (
    <div id="AboutMe" class="about--section">
      <div class="about--section--img">
        <img src={svAbout} />
      </div>
      <div class="text">
        <p className="section--title">ABOUT ME</p>
        <p>
          Experienced Application Developer/Product Manager with a demonstrated
          history of working in various industries. Skilled in REACT, NEXT,
          JAVASCRIPT, TYPESCRIPT, VUE, EXTJS, PHP, HTML, CSS, ORACLE SQL, API,
          GIT and CHROME EXTENSIONS.
        </p>
        <p>
          Experienced in UI/UX, design, web development, accessibility,
          performance optimisation, security, testing, project management,
          product management, product roadmap, vision, strategy and system
          design.
        </p>
        <p>
          Information technology professional with a master's degree in computer
          science from The University of Akron. Experienced in research, data
          analysis/management and optimisation having worked on a thesis project
          dedicated to GPU Based Scattered Data Visualization using CUDA
          programming.
        </p>
      </div>
    </div>
  );
};

export default About;
