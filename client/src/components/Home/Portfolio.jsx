import React from "react";
import "../../assets/css/Home/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFolder } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            image: "/img/IMG_2532-5.png",
            category: "OpenVino",
            title: "Deep Learning Technologies",
            delay: "0.1s",
            type: "first"
        },
        {
            id: 2,
            image: "/img/74833844-52bb-41ec-8b58-7222d2b6d334-4.jpg",
            category: "Nvidea",
            title: "Riding the Generative AI Wave",
            delay: "0.3s",
            type: "second"
        },
        {
            id: 3,
            image: "/img/about-img.jpg",
            category: "Web Design",
            title: "Project Name",
            delay: "0.6s",
            type: "first"
        },
        {
            id: 4,
            image: "/img/IMG_1749-2.jpg",
            category: "Student-Led",
            title: "Generative AI & Prompt Engineering Workshop",
            delay: "0.1s",
            type: "second"
        },
        {
            id: 5,
            image: "/img/IMG_8226-2.JPG",
            category: "Intel",
            title: "Moore's law is dead",
            delay: "0.3s",
            type: "first"
        },
        {
            id: 6,
            image: "/img/about-img.jpg",
            category: "Web Design",
            title: "Project Name",
            delay: "0.6s",
            type: "second"
        }
    ];

    return (
        <section className="container-fluid py-5 portfolio-section">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Catalog</h6>
                    <h1 className="mb-4">Past Events</h1>
                </div>
                
                <div className="row g-4 portfolio-container">
                    {portfolioItems.map((item) => (
                        <div 
                            key={item.id}
                            className="col-lg-4 col-md-6 portfolio-item"
                        >
                            <div className="position-relative rounded overflow-hidden portfolio-card">
                                {/* Image with fallback */}
                                <div className="portfolio-image-container">
                                    <img 
                                        className="img-fluid w-100 portfolio-image" 
                                        src={item.image} 
                                        alt={item.title}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    {/* Fallback if image doesn't load */}
                                    <div 
                                        className="portfolio-image-fallback"
                                        style={{
                                            display: 'none',
                                            height: '250px',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {item.category}
                                    </div>
                                </div>
                                
                                {/* Overlay that's always visible for now */}
                                <div className="portfolio-overlay-visible">
                                    <div className="portfolio-content">
                                        <small className="text-white">
                                            <FontAwesomeIcon icon={faFolder} className="me-2" />
                                            {item.category}
                                        </small>
                                        <div className="h5 text-white mt-1 mb-0 portfolio-title">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <br />
                <br />
                
                <div className="row mt-n2">
                    <div className="col-12 text-center">
                        <a href="/events#pastEventsSection" className="btn btn-primary rounded-pill px-4 me-3 portfolio-view-more-btn">
                            View More
                        </a>
                    </div>
                </div>        
            </div>
        </section>
    );
};

export default Portfolio;