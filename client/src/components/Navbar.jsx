import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`container-fluid navbar-wrapper ${
                scrolled ? "navbar-scrolled" : "navbar-transparent"
            } fixed-top`}
        >
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-white">
                            ACM<span className="text-dark">.</span>UoBD
                        </h1>
                    </Link>

                    <button
                        type="button"
                        className="navbar-toggler ms-auto me-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/about" className="nav-item nav-link">
                                About
                            </Link>
                            <Link to="/team" className="nav-item nav-link">
                                Our Team
                            </Link>
                            <Link to="/events" className="nav-item nav-link">
                                Events
                            </Link>
                            <Link to="/projects" className="nav-item nav-link">
                                Projects
                            </Link>
                            <Link to="/research" className="nav-item nav-link">
                                Research
                            </Link>

                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    More
                                </a>
                                <div className="dropdown-menu bg-light mt-2">
                                    <Link to="/faq" className="dropdown-item">
                                        FAQs
                                    </Link>
                                    <a
                                        href="mailto:acmuobd@gmail.com"
                                        className="dropdown-item"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        <SearchBar />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
