import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Apply theme to body
    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <Reveal direction="up">
                <Hero />
            </Reveal>

            <Reveal direction="up" delay={150}>
                <Services />
            </Reveal>

            <Reveal direction="left" delay={100}>
                <Portfolio />
            </Reveal>

            <Reveal direction="right" delay={200}>
                <About />
            </Reveal>

            <Reveal direction="zoom" delay={250}>
                <Contact />
            </Reveal>
        </>
    );
}

export default App;
