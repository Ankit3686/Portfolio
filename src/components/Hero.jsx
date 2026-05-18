import { useEffect, useState } from "react";
import heroImg from "./hero1.jpg";
import Resumepdf from "./Ankit fullstack.pdf";

const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
];

function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];

        let speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(current.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else {
                setText(current.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }

            // when typing complete
            if (!isDeleting && charIndex === current.length) {
                setTimeout(() => setIsDeleting(true), 1200);
            }

            // when deleting complete
            if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % roles.length);
            }

        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <section className="hero" id="home">
            <img src={heroImg} alt="profile" />
            <h1>Hi, I'm Ankit</h1>

            <p>
                {text}
                <span className="cursor">|</span>
            </p>

            <div className="hero-buttons">
                <a href="#contact" className="btn">Hire Me</a>
                <a href={Resumepdf} className="btn" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </div>
        </section>
    );
}

export default Hero;