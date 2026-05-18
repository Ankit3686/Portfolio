import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Counter Animation
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            const update = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;

                const increment = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target;
                }
            };

            update();
        });

    }, []);

    return (
        <section id="about">
            <h2 className="section-title" data-aos="fade-up">
                About Me
            </h2>

            <div className="about-container">

                {/* IMAGE TOP */}
                <div className="about-img" data-aos="zoom-in">
                    <img src="/hero1.jpg" alt="profile" />
                </div>

                {/* CONTENT BELOW */}
                <div className="about-content" data-aos="fade-up">

                    <p>
                        I am an MCA graduate with a strong interest in software development and modern web technologies.
                        I have completed 6 months of training in Python and Machine Learning.
                    </p>

                    <p>
                        Currently, I am learning HTML, CSS, JavaScript, and React.js, focusing on building responsive
                        and user-friendly web applications.
                    </p>

                    <p>
                        I am looking for opportunities to grow as a Full Stack Developer and contribute to real-world projects.
                    </p>

                    {/* SKILLS */}
                    <div className="skills">
                        {["HTML", "CSS", "JavaScript", "React", "Python", "ML"].map((skill, i) => (
                            <span key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* COUNTERS */}
                    <div className="counters">
                        <div className="counter-box" data-aos="fade-up">
                            <h3 className="counter" data-target="5">0</h3>
                            <p>Projects</p>
                        </div>

                        <div className="counter-box" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="counter" data-target="12">0</h3>
                            <p>Months Training</p>
                        </div>

                        <div className="counter-box" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="counter" data-target="6">0</h3>
                            <p>Technologies</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;