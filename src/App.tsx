import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ReactComponent as HeroSvg } from "./assets/images/hero.svg";

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
      <Footer />
    </>
  );
}

export default App;
