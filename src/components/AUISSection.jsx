import { InstagramEmbed } from "react-social-media-embed";
import React from "react";
import "@ptkdev/webcomponent-instagram-widget";
import "./AUISSection.css";

const AUISSection = () => {
  if (window.innerWidth < 400) {
    return (
      <div className="AUISContainer">
        <div className="AUISTextContainer">
          <div className="AUISHeader">
            <span className="customColor customFont">Extra </span> - Curriculars
          </div>
          <div className="AUISContent">
            Elected as{" "}
            <span className="customColor customFont"> President </span> for
            Auckland University Indian Society for 2023. Leading a team of 8 to
            execute fun social and cultural events for over 300 members.
          </div>
        </div>
        <div className="IGContainer">
          <InstagramEmbed
            url="https://www.instagram.com/p/Co1MI-ovJlk/"
            width={328}
            height={420}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="AUISContainer">
        {console.log(window.innerWidth)}
        <div className="IGContainer">
          <InstagramEmbed
            url="https://www.instagram.com/p/Co1MI-ovJlk/"
            width={370}
            height={465}
          />
        </div>
        <div className="AUISTextContainer">
          <div className="AUISHeader">
            <span className="customColor customFont">Extra </span> - Curriculars
          </div>
          <div className="AUISContent">
            Elected as{" "}
            <span className="customColor customFont"> President </span> for
            Auckland University Indian Society for 2023. Leading a team of 8 to
            execute fun social and cultural events for over 300 members.
          </div>
        </div>
      </div>
    );
  }
};

export default AUISSection;
