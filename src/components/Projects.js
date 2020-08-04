import React, { useState } from 'react';
import projectData from '../projectData';

import Project from './Project';

const Projects = (props) => {
  const [endIndex, setEndIndex] = useState(6);

  const handleClick = () => {
    let nextEndIndex = endIndex + 2;
    if (nextEndIndex > projectData.length) {
      nextEndIndex = projectData.length;
    }
    setEndIndex(nextEndIndex);
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-box">
        {projectData.slice(0, endIndex).map((project, index) => {
          return <Project index={index} key={`${index}-${project.imageSrc}`} />;
        })}
      </div>
      {endIndex < projectData.length && (
        <button onClick={handleClick}>Show More</button>
      )}
    </div>
  );
};

export default Projects;
