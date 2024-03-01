import React from "react";
import svHero from "../../assets/hero_img_sv.png";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Saranya Vinjarapu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full Stack Developer
            </span>{" "}
            <br />
            Product Manager
          </h1>
          <p className="hero--section-description">
            Experienced Web Developer/Product Manager with a demonstrated
            history of working in various industries.
          </p>
        </div>
        <Link className="hero--section-contact" to="Contact">
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src={svHero} alt="Saranya Vinjarapu Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
