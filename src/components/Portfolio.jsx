import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ministoreImg from "../Ministore1.png";
import mlImg from "../ml project pic.png";
import todoImg from "../Todo2.png";
import instaImg from "../instagram-ui1.png";
import financeImg from "../finance.png";
import typingImg from "../typinggame.png";

const projects = [
    {
        title: "Ministore",
        desc: "E-commerce Website",
        img: ministoreImg,
        live: "https://ankit3686.github.io/Ministore/",
        github: "https://github.com/Ankit3686/Ministore"
    },
    {
        title: "Instagram-UI",
        desc: "React Instagram clone",
        img: instaImg,
        live: "https://ankit3686.github.io/Instagram_UI/",
        github: "https://github.com/Ankit3686/Instagram_UI"
    },
    {
        title: "Deepfake Detection",
        desc: "ML Model Project",
        img: mlImg,
        live: "https://huggingface.co/spaces/Ankit22102001/Deepfake_Detection",
        github: "https://github.com/Ankit3686/Deepfake-Detection-System"
    },
    {
        title: "Todo List",
        desc: "React Task Manager",
        img: todoImg,
        live: "https://ankit3686.github.io/To-Do-List/",
        github: "https://github.com/Ankit3686/To-Do-List"
    },
    {
        title: "Finance Tracker",
        desc: "React Finance App",
        img: financeImg,
        live: "https://ankit3686.github.io/Finance-Tracker/",
        github: "https://github.com/Ankit3686/Finance-Tracker"
    },
    {
        title: "Typing Speed Tester",
        desc: "React Typing App",
        img: typingImg,
        live: "https://ankit3686.github.io/Typing-Game/",
        github: "https://github.com/Ankit3686/Typing-Game"
    }
];

function Portfolio() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="portfolio">
            <h2 className="section-title" data-aos="fade-up">
                My Projects
            </h2>

            {/* AUTO SCROLL WRAPPER */}
            <div className="portfolio-scroll">
                <div className="portfolio-track">
                    {projects.map((project, i) => (
                        <div className="portfolio-card" key={i} data-aos="zoom-in">

                            <div className="project-img">
                                <img src={project.img} alt={project.title} />

                                <div className="overlay">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;