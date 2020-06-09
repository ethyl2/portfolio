import React from 'react';
import Heather from '../images/HeatherNuffer.jpg';

const Home = (props) => {
  const handleClick = () => {
    props.history.push('/projects');
  };

  return (
    <div className="home-box">
      <div className="left-content">
        <div className="text-box">
          <h1>Heather Nuffer</h1>
          <h2>Full-Stack Web Developer</h2>
        </div>
        <button onClick={handleClick}>Explore My Projects</button>
      </div>
      <div className="image-container">
        <img src={Heather} alt="Heather Nuffer" />
      </div>
    </div>
  );
};

export default Home;
