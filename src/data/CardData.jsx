import KemuKupuIMG from "../assets/ProjectImages/KemuKupu.jpg";
import StockZIMG from "../assets/ProjectImages/StockZ.jpg";
import CarbonEasyIMG from "../assets/ProjectImages/CarbonEasy.jpg";
import KoallabIMG from "../assets/ProjectImages/Koallab.jpg";
import PRIMG from "../assets/ProjectImages/PlateRecognition.jpg";
import SpcaeIMG from "../assets/ProjectImages/SpaceExploration.jpg";
import SPCAIMG from "../assets/ProjectImages/SPCA.jpg";
import ThisWebIMG from "../assets/ProjectImages/ThisWebsite.jpg";
import TrafficJamIMG from "../assets/ProjectImages/TrafficJam.jpg";


export const CardData = [
    {
        name: "SPCA Software",
        description: "Final year capstone project where a weight tracking web application was developed to connect with a physical scale in a software team of 3, using the MERN stack with TypeScript.",
        tech: "MongoDB    Express    TypeScript    NodeJs    React",
        image: SPCAIMG,
    },
    {
        name: "Koallab",
        description: "Developed a Jira / Trello style task and project management software for university students in a team of 6. Used the MERN stack for the web application and led frontend development.",
        tech: "MongoDB    Express    JavaScript    NodeJs    React",
        image: KoallabIMG,
    },
    {
        name: "Stock Z",
        description: "Developed an native android E-commerce store using java and android studio. Implemented MVC design and dependency injection, led frontend development and code reviews",
        tech: "Java    Android Studio    Firebase",
        image:StockZIMG ,
    },
    {
        name: "Kemu Kupu",
        description: "Third year project in a team of 3, developing a game to teach te reo Māori to 5-12 year olds. Led backend game design and documented the user manual, with code reviews. ",
        tech:"Java    JavaFx    BASH    Linux",
        image:KemuKupuIMG ,
    },
    {
        name: "Carbon Easy",
        description: "A high fidelity design for a third year course for a carbon footprint company, involving Gestalts prinicples of design using and restricted to HTML, CSS3 and Vanilla JavaScript.",
        tech: "JavaScript    HTML    CSS",
        image: CarbonEasyIMG,
    },
    {
        name: "Space Exploration",
        description: "Made an interactive space exploration quiz game in a team of 10 using React, focusing heavily on educational design. This was also awarded the highest marks in course (SE701).",
        tech: "JavaScript    React",
        image: SpcaeIMG,
    },
    {
        name: "Number Plate Recognition",
        description: "Image processing assignment for the course COMPSCI 373, tasked to The aim of this project is to detect the bounding box around the license plate in an image of a car with no external python libraries",
        tech: "Python",
        image: PRIMG,
    },
    {
        name: "Traffic Jam",
        description: "A first year baby coding project. Written purely in C and runs on the terminal. Only if you could fix Auckland's traffic like this.",
        tech: "C",
        image: TrafficJamIMG,
    },
    {
        name: "This Website",
        description: "The result of being mildly bored in the semester break. React + JS for the code, with greensock for animations and hosted on netlify. Automatic CI/CD build pipeline from GitHub.",
        tech: "JavaScript    React    GSAP",
        image: ThisWebIMG,
    },
    
]