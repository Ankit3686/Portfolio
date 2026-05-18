import {
    FaCode,
    FaReact,
    FaBrain,
    FaServer,
    FaPalette,
} from "react-icons/fa";

const servicesData = [
    {
        icon: <FaCode />,
        title: "Web Development",
        points: [
            "Responsive website design",
            "Modern UI using HTML, CSS, JS",
            "React-based apps",
        ],
    },
    {
        icon: <FaReact />,
        title: "Frontend Development",
        points: [
            "Single Page Applications",
            "Component-based UI",
            "API Integration",
        ],
    },
    {
        icon: <FaBrain />,
        title: "Machine Learning",
        points: [
            "Basic ML models",
            "Data analysis",
            "Mini ML projects",
        ],
    },
    {
        icon: <FaServer />,
        title: "Backend Basics",
        points: [
            "FastAPI",
            "MySQL integration",
        ],
    },
    {
        icon: <FaPalette />,
        title: "UI/UX Design",
        points: [
            "Figma to HTML",
            "Clean UI",
            "Responsive layouts",
        ],
    },
];

function Services() {
    return (
        <section id="services">
            <h2 className="section-title">My Services</h2>

            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card premium" key={index}>

                        <div className="icon">{service.icon}</div>

                        <h3>{service.title}</h3>

                        <ul>
                            {service.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;