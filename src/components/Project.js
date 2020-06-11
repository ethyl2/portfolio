import React, { useState } from 'react';
import projectData from '../projectData';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
  },
};

Modal.setAppElement(document.getElementById('root'));

const Project = ({ index }) => {
  const [modalisOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalisOpen);
  };

  const afterOpenModal = () => {
    //TBD
  };

  const closeModal = () => {
    setModalIsOpen(!modalisOpen);
  };

  return (
    <div className="project-box">
      <div className="screenshot-container" onClick={openModal}>
        <img
          src={projectData[index].imageSrc}
          alt={`screenshot for ${projectData[index].title}`}
        />
      </div>
      <button onClick={openModal}>{projectData[index].title}</button>
      <Modal
        isOpen={modalisOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal"
        //style={customStyles}
        contentLabel={projectData[index].title}
      >
        <div className="modal-box">
          <h2>{projectData[index].title}</h2>
          <p>{projectData[index].description}</p>
          <h3>Tech Stack:</h3>
          <p>{projectData[index].techStack}</p>
          <div className="links-box">
            <div>
              <a
                className="fa"
                href={projectData[index].deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
              <p>{projectData[index].title} Deployment</p>
            </div>
            <div>
              <a
                href={projectData[index].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="fa"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <p>{projectData[index].title} Repository</p>
            </div>
          </div>

          <ul>
            {projectData[index].keyFeatures.map((feature) => {
              return (
                <li>
                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
