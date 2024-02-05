import React from "react";
import "./Skills.css";
import { skills } from "../../data";

const Skills = () => {
  return (
    <section className="skills--section" id="mySkills">
      <p className="section--title">MY SKILLS</p>
      <div className="skills--section--container">
        {skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
