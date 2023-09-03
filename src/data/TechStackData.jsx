import {
    FaJava,
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaGithub,
    FaLinux,
  } from "react-icons/fa";
  import {
    SiJavascript,
    SiTypescript,
    SiKotlin,
    SiMongodb,
    SiFirebase,
  } from "react-icons/si";
  import { TbSql } from "react-icons/tb";
  import { SiGnubash } from "react-icons/si";
  import reactLogo from '../assets/react.svg'

export const TechStackData = [
    {
        name: 'Java',
        icon: <FaJava/>
    },
    {
        name: 'Python',
        icon: <FaPython/>
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript/>
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript/>
    },
    {
        name: 'React',
        icon: <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>


    },
    {
        name: 'Kotlin',
        icon: <SiKotlin/>
    },
    {
        name: 'HTML',
        icon: <FaHtml5/>
    },
    {
        name: 'CSS',
        icon: <FaCss3/>
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb/>
    },
    {
        name: 'Firebase',
        icon: <SiFirebase/>
    },
    {
        name: 'SQL',
        icon: <TbSql/>
    },
    {
        name: 'NodeJS',
        icon: <FaNodeJs/>
    },
    {
        name: 'Git',
        icon: <FaGithub/>
    },
    {
        name: 'Linux',
        icon: <FaLinux/>

    },
    {
        name: 'BASH',
        icon: <SiGnubash/>
    }
]