import React, { useEffect, useRef } from 'react';

import './App.scss';
import './styles/HeroSection.scss';
import './styles/AboutSection.scss';
import './styles/ToolsSection.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { importAll } from './shared';

import { ReactComponent as HeroSvg } from './assets/images/hero.svg';
import WebMasterImg from './assets/images/ziyad-landscape.svg';

function App() {
  const importImages = useRef(
    importAll(require.context('./assets/images/tools-logos', false, /\.(svg)$/))
  ).current;

  useEffect(() => {});

  const Hero = () => (
    <section className='hero-section container'>
      <HeroSvg
        className='hero-section__img'
        aria-label="Image describing the webmaster's skills - web developer/ devops engineer"
      />
    </section>
  );

  const About = () => (
    <section className='about-section container'>
      <img
        className='about-section--img'
        src={WebMasterImg}
        alt='Portrait of webmaster'
      />
      <p className='about-section--content'>
        I am a computer enthusiast based out of Mumbai who loves writing
        frontend code. I actively keep up with what’s hot and not in the world
        of web development as well as mobile.
        <br />
        <br />I like to hike, play video games and curate my work desk.
      </p>
    </section>
  );

  const Tools = () => (
    <section className='tools-section'>
      <h2 className='tools--heading'>Some of the tools I work with</h2>
      <div className='tools--logos__container'>{getImages()}</div>
    </section>
  );

  const getImages = () => {
    const imageArray: JSX.Element[] = [];
    Object.keys(importImages).forEach((key) => {
      imageArray.push(
        <img
          className='tools-logo'
          src={importImages[key].default}
          alt={`Logo of ${key}`}
          key={`${key}`}
        />
      );
    });

    return [...imageArray, ...imageArray];
  };

  return (
    <>
      <Navbar />
      {Hero()}
      {About()}
      {Tools()}
      <Footer />
    </>
  );
}

export default App;
