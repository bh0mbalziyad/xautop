import React, { useEffect, useRef } from 'react';

import './App.scss';
import './styles/HeroSection.scss';
import './styles/AboutSection.scss';
import './styles/ToolsSection.scss';
import './styles/WorksSection.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkCard from './components/WorkCard';

import {
  importAll,
  intersectionObserverCallback,
  intersectionObserverOptions,
} from './shared';

import { ReactComponent as HeroSvg } from './assets/images/hero.svg';
import WebMasterImg from './assets/images/ziyad-landscape.svg';
import Hackstrap1 from './assets/images/works/hackstrap1.png';
import Hackstrap2 from './assets/images/works/hackstrap2.png';
import Hackstrap3 from './assets/images/works/hackstrap3.png';
import CaptainKio1 from './assets/images/works/captainkio1.png';
import CaptainKio2 from './assets/images/works/captainkio2.png';
import CaptainKio3 from './assets/images/works/captainkio3.png';

function App() {
  const importImages = useRef(
    importAll(require.context('./assets/images/tools-logos', false, /\.(svg)$/))
  ).current;

  const observer = useRef(
    new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    )
  ).current;

  useEffect(() => {
    document.title = 'Portfolio | Ziyad';

    const sections = document.querySelectorAll('.fade-in');

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  });

  const Hero = () => (
    <section id='top' className='hero-section container fade-in'>
      <HeroSvg
        className='hero-section__img'
        aria-label="Image describing the webmaster's skills - web developer/ devops engineer"
      />
    </section>
  );

  const About = () => (
    <section id='about' className='about-section container fade-in'>
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
    <section id='tools' className='tools-section'>
      <h2 className='tools--heading'>Some of the tools I work with</h2>
      <div className='tools--logos__container'>{getImages()}</div>
    </section>
  );

  const Works = () => (
    <section id='works' className='works-section container'>
      <h2 className='works-section--title'>Projects I have worked on</h2>
      <WorkCard
        title='Hackstrap'
        subtitle='A Hyderabad based startup which helps startups meet potential investors'
      >
        <div className='works-section--img__container'>
          <img
            className='works-section--img'
            src={Hackstrap1}
            alt='Hackstrap 1'
          />
          <div className='works-section--img__row-container'>
            <img
              className='works-section--img row-img'
              src={Hackstrap2}
              alt='Hackstrap 2'
            />
            <img
              className='works-section--img row-img'
              src={Hackstrap3}
              alt='Hackstrap 3'
            />
          </div>
        </div>
      </WorkCard>
      <WorkCard
        title='Captain Kio'
        subtitle='An in-restaurant inventory and order managing web app'
      >
        <div className='works-section--img__container'>
          <img
            className='works-section--img'
            src={CaptainKio1}
            alt='Captain Kio 1'
          />
          <div className='works-section--img__row-container'>
            <img
              className='works-section--img row-img'
              src={CaptainKio2}
              alt='Captain Kio 2'
            />
            <img
              className='works-section--img row-img'
              src={CaptainKio3}
              alt='Captain Kio 3'
            />
          </div>
        </div>
      </WorkCard>
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
      {Works()}
      <Footer />
    </>
  );
}

export default App;
