import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGitAlt,
  faCss3,
  faHtml5,
  faSass,
  faLess,
  faBootstrap,
  faJsSquare,
  faReact,
  faNodeJs,
  faPython,
  faSlack,
  faTrello,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Skill from './Skill';

const Skills = (props) => {
  return (
    <div className="skills-container">
      <h2>Tech Skills</h2>
      <div className="skills-box">
        <Skill icon={faGitAlt} name="Git" />
        <Skill icon={faGithub} name="GitHub" />
        <Skill icon={faHtml5} name="HTML5" />
        <Skill icon={faCss3} name="CSS3" />
        <Skill icon={faSass} name="SASS" />
        <Skill icon={faLess} name="LESS" />
        <Skill icon={faBootstrap} name="Bootstrap" />
        <Skill icon={faJsSquare} name="JavaScript" />
        <Skill icon={faReact} name="React" />
        <Skill icon={faNodeJs} name="Node.js" />
        <Skill icon={faPython} name="Python" />
        <Skill icon={faDatabase} name="SQL" />
        <Skill icon={faSlack} name="Slack" />
        <Skill icon={faTrello} name="Trello" />
      </div>
    </div>
  );
};

export default Skills;
