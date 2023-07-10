import React from "react";
import './TechStack.css'

import {FaJava, FaPython, FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub, FaLinux} from 'react-icons/fa'
import {SiJavascript, SiTypescript, SiKotlin, SiMongodb, SiFirebase} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'
import {SiGnubash} from 'react-icons/si'


const TechStack = () => {
    return(
        <div className="TechStackContainer">
            <div className="TechStackTitle">
                Technology <span className="customFont customColor" > Stack </span>
            </div>
            <div className="Technology">
                <div className="TechnologyDiv">
                <FaJava className="TechnologyIcon"/>
                Java
                </div>
                <div className="TechnologyDiv">
                <FaPython className="TechnologyIcon"/>
                Python
                </div>
                <div className="TechnologyDiv">
                <SiJavascript className="TechnologyIcon"/>
                JavaScript
                </div>
                <div className="TechnologyDiv">
                <SiTypescript className="TechnologyIcon"/>
                TypeScript
                </div>
                <div className="TechnologyDiv">
                <FaReact className="TechnologyIcon"/>
                React
                </div>
                <div className="TechnologyDiv">
                <SiKotlin className="TechnologyIcon"/>
                Kotlin
                </div>
                <div className="TechnologyDiv">
                <FaHtml5 className="TechnologyIcon"/>
                HTML
                </div>
                <div className="TechnologyDiv">
                <FaCss3 className="TechnologyIcon"/>
                CSS
                </div>
                <div className="TechnologyDiv">
                <SiMongodb className="TechnologyIcon"/>
                MongoDB
                </div>
                <div className="TechnologyDiv">
                <SiFirebase className="TechnologyIcon"/>
                Firebase
                </div>
                <div className="TechnologyDiv">
                <TbSql className="TechnologyIcon"/>
                SQL
                </div>
                <div className="TechnologyDiv">
                <FaNodeJs className="TechnologyIcon"/>
                NodeJS
                </div>
                <div className="TechnologyDiv">
                <FaGithub className="TechnologyIcon"/>
                Git
                </div>
                <div className="TechnologyDiv">
                <FaLinux className="TechnologyIcon"/>
                Linux
                </div>
                <div className="TechnologyDiv">
                <SiGnubash className="TechnologyIcon"/>
                BASH
                </div>
            </div>


        </div>
    )
}

export default TechStack;