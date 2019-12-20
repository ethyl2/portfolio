import React from 'react';
import projectData from '../projectData';

const Projects = props => {
    console.log(projectData);
    return (
        <div className='home-box'>
            <h1>Portfolio</h1>
            <div>
                <h3>{projectData[0].title}</h3>
                <p>{projectData[0].description}</p>
                <a href={projectData[0].deployed} >{projectData[0].title}</a>
                <a href={projectData[0].repo}>Repository on GitHub</a>
            </div>
        </div>
    )
}

export default Projects;