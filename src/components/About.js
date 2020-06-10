import React from 'react';
import sunflowerPaintings from '../images/sunflowerPaintings.jpg';
import menu from '../images/menu.png';
import pumpkinPie from '../images/pumpkinPie.jpg';
import colorZentangle from '../images/colorZentangle.JPG';

const About = (props) => {
  return (
    <div className="home-box">
      <div className="left-content">
        <div className="text-box">
          <h1>About Me</h1>
          <p>
            I grew up in Michigan and now live in Utah. I am currently a
            full-stack web development student at{' '}
            <a
              href="https://lambdaschool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda School
            </a>
            . I also have a BS in microbiology from{' '}
            <a
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
          <p>
            I love to create things. When I'm not creating web applications, you
            can find me making something with fabric, music, paint, or pen -- or
            trying out a new vegetarian/vegan recipe in my kitchen.
          </p>
        </div>
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
