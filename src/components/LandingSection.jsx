import React, { useEffect, useRef } from "react";
import "./LandingSection.css";
import { gsap } from "gsap";
import { Expo } from "gsap";

const LandingSection = () => {
  const block1ref = useRef(null);
  const block2ref = useRef(null);
  const block3ref = useRef(null);
  const landingChildRef = useRef(null);
  const landingChildLeftRef = useRef(null);
  const landingChildMiddleRef = useRef(null);
  const landingChildRightRef = useRef(null);
  const block3ContentContainerRef = useRef(null)

  useEffect(() => {
    var tl = gsap.timeline();

    tl.to(landingChildLeftRef.current, {
      x: "0px",
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(landingChildMiddleRef.current, {
        x: "0px",
        duration: 1.5,
        delay: -1.25,
        ease: Expo.easeInOut,
      })
      .to(landingChildRightRef.current, {
        x: "0px",
        duration: 1.5,
        delay: -1.25,
        ease: Expo.easeInOut,
      })

      .to(landingChildRef.current, {
        y: "-100%",
        duration: 0.7,
        delay: 1,
        ease: Expo.easeInOut,
      })
      .to(block1ref.current, {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to(block2ref.current, {
        height: "100%",
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut,
      })
      .to(block3ref.current, {
        height: "100%",
        duration: 1,
        delay: -0.7,
        ease: Expo.easeInOut,
      })
      .to(block3ContentContainerRef.current, {
        y: 0,
        display: 'block',
        duration: 1,
        ease: Expo.easeInOut,
      });
  }, []);

  return (
    <div id="LandingSection">
      <div id="block1" ref={block1ref}>
        <h1 id="landingDiv">
          <span id="landingParent">
            <div id="landingChild" ref={landingChildRef}>
              <div id="landingChildLeft" ref={landingChildLeftRef}>
                Hi,{" "}
              </div>
              <div id="landingChildMiddle" ref={landingChildMiddleRef}>
                I'm{" "}
              </div>
              <div id="landingChildRight" ref={landingChildRightRef}>
                Aashish{" "}
              </div>
            </div>
          </span>
        </h1>
      </div>
      <div id="block2" ref={block2ref} />
      <div id="block3" ref={block3ref}>
        <div id="block3ContentContainer" ref={block3ContentContainerRef}>
          <div className="block3Content moveRight">IM A</div>
          <div className="block3Content moveLeft changingText">Sample</div>
          <div className="block3Content">FINAL YEAR</div>
          <div className="block3Content">SOFTWARE</div>
          <div className="block3Content moveLeft">ENGINEERING</div>
          <div className="block3Content">STUDENT</div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
