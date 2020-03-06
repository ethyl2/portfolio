import React from 'react';
import sunflowerPaintings from '../images/sunflowerPaintings.jpg';

const About = props => {
  return (
    <div className="home-box">
      <div className="left-content">
        <div className="text-box">
          <p>
            I love to create things. I mostly work with code, fabric, and paper.
          </p>
          <p>I have a microbiology background, and also love science.</p>
        </div>
      </div>
      <div className="image-container">
        <img src={sunflowerPaintings} alt="sunflower paintings" />
      </div>
    </div>
  );
};

export default About;
