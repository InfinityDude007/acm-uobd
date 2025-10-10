import React from "react";
import "../../assets/css/Home/About.css";
import aboutImage from "../../assets/img/Innovation-amico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <section className="container-fluid py-5 about-section">
            <div className="container">
                <div className="row g-5 align-items-center">
                    
                    <div className="col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft animate__slow">
                        <div className="about-img">
                            <img
                                src={aboutImage}
                                alt="Innovation Illustration"
                                className="img-fluid about-image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight animate__slow">
                        <div className="btn btn-sm border about-btn rounded-pill text-primary px-3 mb-3">
                            About Us
                        </div>
                        <h1 className="mb-4">Our Mission</h1>
                        <p className="mb-4">
                            Our mission is to cultivate a dynamic community of students at
                            UoBD passionate about computer science and technology. We aim to
                            bridge the gap between academic knowledge and real-world
                            applications, fostering collaboration, learning, and innovation.
                        </p>
                        <p className="mb-4">
                            Whether you're a seasoned coder or just starting your tech journey,
                            the ACM Student Chapter at UoBD welcomes you. Join us to learn,
                            innovate, and make a positive impact through technology.
                        </p>

                        <div className="row g-3 about-goals">
                            <h6 className="fw-bold">Our Goals</h6>
                            <div className="col-sm-6">
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Connecting Students
                                </h6>
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Outreach Initiatives
                                </h6>
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Career Advancement
                                </h6>
                            </div>
                            <div className="col-sm-6">
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Practical Experience
                                </h6>
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Skill Development
                                </h6>
                                <h6>
                                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                                    Showcasing Innovation
                                </h6>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-4 about-buttons">
                            <a
                                className="btn btn-primary rounded-pill px-4 me-3"
                                href="/about"
                            >
                                Read More
                            </a>

                            <a
                                className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "42px", height: "42px" }}
                                href="https://www.instagram.com/acm_uobd/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a
                                className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "42px", height: "42px" }}
                                href="https://www.linkedin.com/company/uobd-acm-chapter/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                            <a
                                className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "42px", height: "42px" }}
                                href="mailto:acmuobd@gmail.com"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
