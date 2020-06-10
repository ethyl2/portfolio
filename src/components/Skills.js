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

const skills = [
  { icon: faGitAlt, name: 'Git' },
  { icon: faGithub, name: 'GitHub' },
  { icon: faCss3, name: 'CSS3' },
  { icon: faHtml5, name: 'HTML5' },
  { icon: faSass, name: 'SASS' },
  { icon: faLess, name: 'LESS' },
  { icon: faBootstrap, name: 'Bootstrap' },
  { icon: faJsSquare, name: 'JavaScript' },
  { icon: faReact, name: 'React' },
  { icon: faNodeJs, name: 'Node.js' },
  { icon: faDatabase, name: 'SQL' },
  { icon: faPython, name: 'Python' },
  { icon: faSlack, name: 'Slack' },
  { icon: faTrello, name: 'Trello' },
];

const Skills = (props) => {
  return (
    <div className="skills-container">
      <h2>Tech Skills</h2>
      <div className="skills-box">
        {skills.map((skill) => {
          return <Skill key={skill.name} icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
