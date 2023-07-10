import React from "react";
import ProjectCard from "./ProjectCard";
import { BsDownload } from "react-icons/bs";
import AashishCV_25May from "../assets/AashishCV_25May.pdf"

const ProjectContainer = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../assets/AashishCV_25May.pdf"; 
    link.download = "AashishCV_25May.pdf"; 
    link.click();
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#303030",
        marginTop: "40px",

      }}
    >
      <h1
        style={{
          fontSize: "4rem",
        }}
      >
        <span className="customColor customFont">University </span>PROJECTS
      </h1>
      <div
        style={{
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <ProjectCard name="Kemu Kupu" tech="Java    JavaFx    BASH    Linux"/>
        <ProjectCard name="Stock Z" tech="Java    Android Studio"/>
        <ProjectCard name="A* Scheduler" tech="Java    JavaFx"/>
        <ProjectCard name="Number Plate Recognition" tech="Python"/>
        <ProjectCard name="Traffic Jam" tech="C"/>
        <ProjectCard name="SPCA Software" tech="MongoDB    Express    TypeScript    NodeJs    React"/>
        <ProjectCard name="Koallab" tech="MongoDB    Express    JavaScript    NodeJs    React"/>
        <ProjectCard name="Space Exploration" tech="JavaScript    React"/>
        <ProjectCard name="This Website" tech="JavaScript    React    GSAP"/>







      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "underline",
          cursor: "pointer",
        }}

        onClick={downloadResume}
      >
        <h4
          style={{
            marginRight: "10px",
          }}
        >
          Download my resume
          
        </h4>
        <BsDownload />
      </div> */}
    </div>
  );
};

export default ProjectContainer;
