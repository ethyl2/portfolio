import React from 'react';
import projectData from '../projectData';

import Project from './Project';

const Projects = (props) => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-box">
        {projectData.map((project, index) => {
          return <Project index={index} key={`${index}-${project.imageSrc}`} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

/*
<div>
                <h3>{projectData[0].title}</h3>
                <p>{projectData[0].description}</p>
                <a href={projectData[0].deployed} >{projectData[0].title}</a>
                <a href={projectData[0].repo}>Repository on GitHub</a>
            </div>
*/
