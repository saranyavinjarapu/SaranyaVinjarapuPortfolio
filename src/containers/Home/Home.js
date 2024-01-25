import React from "react";
import "./Home.css";
import { Navbar, Contact } from "../../components";
import {
  HeroSection,
  Skills,
  About,
  Portfolio,
  Testimonials,
  Footer,
} from "../";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
