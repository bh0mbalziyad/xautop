import React from "react";
import "./App.scss";
import "./styles/HeroSection.scss";
import "./styles/AboutSection.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ReactComponent as HeroSvg } from "./assets/images/hero.svg";
import WebMasterImg from "./assets/images/ziyad-landscape.svg";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero-section container">
        <HeroSvg
          className="hero-section__img"
          aria-label="Image describing the webmaster's skills - web developer/ devops engineer"
        />
      </section>
      <section className="about-section container">
        <img
          className="about-section--img"
          src={WebMasterImg}
          alt="Portrait of webmaster"
        />
        <p className="about-section--content">
          I am a computer enthusiast based out of Mumbai who loves writing
          frontend code. I actively keep up with what’s hot and not in the world
          of web development as well as mobile.
          <br />
          <br />I like to hike, play video games and curate my work desk.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default App;
