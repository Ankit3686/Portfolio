import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <h2 className="logo">Ankit</h2>

            {/* HAMBURGER */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                ☰
            </div>

            {/* MENU */}
            <nav className={`menu ${open ? "active" : ""}`}>
                <a href="#home" onClick={() => setOpen(false)}>Home</a>
                <a href="#portfolio" onClick={() => setOpen(false)}>Projects</a>
                <a href="#services" onClick={() => setOpen(false)}>Services</a>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

                {/* DARK MODE TOGGLE */}
                <button
                    className="dark-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;