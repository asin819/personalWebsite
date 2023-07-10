import React from "react";
import "./Footer.css";
import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiGreensock } from "react-icons/si";

const Footer = () => {
  function linkedIn() {
    window.location.href = "https://www.linkedin.com/in/aashish4real/";
  }

  function gitHub() {
    window.location.href = "https://github.com/asin819";
  }

  function greenSock() {
    window.location.href = "https://greensock.com/gsap/";
  }
  return (
    <div className="FooterContainer">
      <div className="footerLeft footerContent">
        <FaLinkedin
          className="reactIcon"
          style={{ marginRight: "20px", cursor: "pointer" }}
          onClick={linkedIn}
        />
        <FaGithub
          className="reactIcon"
          style={{ cursor: "pointer" }}
          onClick={gitHub}
        />
      </div>
      <div className="footerRight footerContent">
        <span className="mobileFooter">Made using</span><FaReact className="reactIcon" style={{ margin: "5px" }} />{" "}
        <BiLogoJavascript
          className="reactIcon"
          style={{ marginRight: "5px" }}
        />{" "}
        <SiGreensock
          className="reactIcon"
          style={{ cursor: "pointer" }}
          onClick={greenSock}
        />
      </div>
    </div>
  );
};

export default Footer;
