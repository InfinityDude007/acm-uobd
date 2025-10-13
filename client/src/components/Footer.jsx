import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/img/dual.png";
import "../assets/css/Footer.css";

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="container-fluid bg-dark text-white-50 footer pt-5">
            <div className="container py-5">
                <div className="row g-4 align-items-start">

                    <div className="col-md-6 col-lg-4">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <div className="footer-address">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                            <span>
                                The University of Birmingham Dubai,<br />
                                Dubai International Academic City
                            </span>
                        </div>
                        <div className="footer-address">
                            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                            <span>
                                acmuobd@gmail.com
                            </span>
                        </div>
                        <div className="d-flex pt-2">
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.instagram.com/acm_uobd/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.linkedin.com/company/uobd-acm-chapter/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Links</h5>
                        <Link className="btn btn-link" to="/about">
                            About Us
                        </Link>
                        <a
                            className="btn btn-link"
                            href="https://www.acm.org/membership/membership-options"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Become a Member
                        </a>
                        <Link className="btn btn-link" to="/events">
                            Events
                        </Link>
                        <a className="btn btn-link" href="mailto:acmuobd@gmail.com">
                            Contact Us
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center text-lg-end">
                        <a href="/" className="d-inline-block">
                            <img
                                className="logo img-fluid"
                                src={logo}
                                alt="ACM UoBD Logo"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright mt-4 pt-3">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy;{" "}
                            <a className="border-bottom" href="/">
                                ACM UoBD Student Chapter
                            </a>
                            , All Rights Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <a href="mailto:acmuobd@gmail.com">Help</a>
                                <Link to="/faq">FAQs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#"
                className={`back-to-top ${scrolled ? "visible" : ""}`}
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Back to top"
                >
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </footer>
    );
};

export default Footer;
