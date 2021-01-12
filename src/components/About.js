import React from 'react';
import Skills from './Skills';
import sunflowerPaintings from '../images/sunflowerPaintings.jpg';
import menu from '../images/menu.png';
import pumpkinPie from '../images/pumpkinPie.jpg';
import colorZentangle from '../images/colorZentangle.JPG';
import LambdaBadge from '../images/LambdaBadge.png';
import BCLogo from '../images/bc_logo.jpg';

const About = (props) => {
  return (
    <div className="home-box about">
      <div className="text-box">
        <h1>About Me</h1>
        <p>
          I grew up in Michigan and now live in Utah. I love coding and
          am a web developer at{' '}  
          <a className="school-link" 
            href="https://bestcompany.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >Best Company
          </a>
          . I graduated from the full-stack web
          development program at{' '}
          <a
            className="school-link"
            href="https://lambdaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lambda School
          </a>
          . I also have a BS in microbiology from{' '}
          <a
            className="school-link"
            href="https://www.byu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brigham Young University
          </a>
          .
          
        </p>
        <a
          className="resume-link"
          href="https://resume.creddle.io/resume/aj6reap4xj0"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Resume
        </a>
      </div>

      <div className="images-container badge">
        <a
          href="https://bestcompany.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={BCLogo}
            alt="Best Company Logo"
          />
        </a>
      </div>

      <Skills />

      <div className="images-container badge">
        <a
          href="https://www.youracclaim.com/badges/25a7471a-afad-44fb-8da8-5d9f3ea93f39/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LambdaBadge}
            alt="Lambda School Full Stack Web Development Badge"
          />
        </a>
      </div>

      <div className="text-box">
        <p>
          Creating things is my passion. When I'm not coding web applications,
          you can find me making something with fabric, music, paint, or pen --
          or trying out a new vegetarian/vegan recipe in my kitchen.
        </p>
      </div>

      <div className="images-container">
        <div className="image-container">
          <img src={sunflowerPaintings} alt="sunflower paintings" />
        </div>
        <div className="image-container">
          <img src={menu} alt="menu board with zentangle background" />
        </div>
        <div className="image-container">
          <img src={colorZentangle} alt="zentangle art" />
        </div>
        <div className="image-container">
          <img src={pumpkinPie} alt="pumpkin pie felt keychain" />
        </div>
      </div>
    </div>
  );
};

export default About;
