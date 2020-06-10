import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = (props) => {
  return (
    <div className="skill-box">
      <p className="fa">
        <FontAwesomeIcon icon={props.icon} />
      </p>
      <p>{props.name}</p>
    </div>
  );
};

export default Skill;
