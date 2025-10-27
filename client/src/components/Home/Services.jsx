import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPowerOff, faGraduationCap, faBrain } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/Home/Services.css";

const Services = () => {
    const services = [
        {
            icon: faRobot,
            title: "Tech Workshops",
            text: "Hands-on sessions where students explore technologies like AI, Web Development, and Embedded Systems.",
        },
        {
            icon: faPowerOff,
            title: "Hackathons & Events",
            text: "We host exciting coding challenges and innovation events that promote teamwork and creativity.",
        },
        {
            icon: faGraduationCap,
            title: "Panels & Seminars",
        text: "Empowering members with networking, mentorship, and opportunities to grow their technical understanding.",
        },
        {
            icon: faBrain,
            title: "Research & Innovation",
            text: "Fostering research initiatives and student-led projects to advance knowledge and innovation.",
        },
    ];

    return (
        <section className="container-fluid py-5 services-section">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                        Our Services
                    </div>
                    <h1 className="fw-bold">What We Provide</h1>
                    <p className="text-muted">
                        Discover how ACM UoBD helps students enhance their technical,
                        creative, and professional skills through diverse programs and
                        events.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="col-lg-3 col-md-6 animate__animated animate__fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                    <div className="service-item text-center p-4 h-100">
                        <div className="service-icon mx-auto mb-4">
                            <FontAwesomeIcon icon={service.icon} className="fa-2x" />
                        </div>
                        <h5 className="mb-3 fw-semibold">{service.title}</h5>
                        <p className="text-muted small">{service.text}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
    );
};

export default Services;
