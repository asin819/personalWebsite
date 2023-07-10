import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {

    const openModal = () => {

    }

  return (
    <div className="ProjectCard">
      <div className="ProjectImage"></div>
      <p
        style={{
          marginLeft: "20px",
          marginBottom: "5px",
          marginTop: "10px",
          fontSize: "1.5rem",
        }}
      >
        {props.name}
      </p>
      <p
        style={{
          marginLeft: "20px",
          marginTop: "0px",
          marginBottom: "0px",
          fontSize: "0.8rem",
          whiteSpace: 'pre'
        }}
      >
        {props.tech}
      </p>
      <p style={{
        marginTop: '5px',
        marginLeft: '20px',
        marginRight: '20px',
        textAlign: 'justify'
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam quis nostrud <span className="customColor"style={{
            textDecoration : "underline"
        }} onClick={openModal}>read more...</span>
      </p>
    </div>
  );
};

export default ProjectCard;
