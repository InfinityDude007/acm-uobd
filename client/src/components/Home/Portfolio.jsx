import React, { useEffect } from "react";
import "../../assets/css/Home/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFolder, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

import event1 from "../../assets/img/IMG_2532 5.jpg";
import event2 from "../../assets/img/74833844-52bb-41ec-8b58-7222d2b6d334 4.jpg";
import event3 from "../../assets/img/about-img.jpg";
import event4 from "../../assets/img/IMG_1749 2.jpg";
import event5 from "../../assets/img/IMG_8226 2.jpg";
import event6 from "../../assets/img/about-img.jpg";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
    }, []);

    // Sample data structure - this would come from your Django backend
    const portfolioItems = [
        {
            id: 1,
            image: event1,
            category: "OpenVino",
            title: "Deep Learning Technologies",
            animation: "fade-up",
            delay: 100,
            isPinned: true, // This would be set by admin in Django
            isPlaceholder: false
        },
        {
            id: 2,
            image: event2,
            category: "NVIDIA",
            title: "Riding the Generative AI Wave",
            animation: "fade-up",
            delay: 200,
            isPinned: true, // This would be set by admin in Django
            isPlaceholder: false
        },
        {
            id: 3,
            image: event3,
            category: "Web Design",
            title: "Project Name",
            animation: "fade-up",
            delay: 300,
            isPinned: false,
            isPlaceholder: false
        },
        {
            id: 4,
            image: event4,
            category: "Student-Led",
            title: "Generative AI & Prompt Engineering Workshop",
            animation: "fade-up",
            delay: 400,
            isPinned: false,
            isPlaceholder: false
        },
        {
            id: 5,
            image: event5,
            category: "Intel",
            title: "Moore's law is dead",
            animation: "fade-up",
            delay: 500,
            isPinned: false,
            isPlaceholder: false
        },
        {
            id: 6,
            image: event6,
            category: "Web Design",
            title: "Project Name",
            animation: "fade-up",
            delay: 600,
            isPinned: false,
            isPlaceholder: false
        }
    ];

    // Function to get items for the first row (always 3 items)
    const getFirstRowItems = () => {
        const pinnedItems = portfolioItems.filter(item => item.isPinned);
        const regularItems = portfolioItems.filter(item => !item.isPinned && !item.isPlaceholder);
        
        // If we have 3 or more pinned items, use them
        if (pinnedItems.length >= 3) {
            return pinnedItems.slice(0, 3);
        }
        
        // If we have some pinned items, fill the rest with regular items
        if (pinnedItems.length > 0) {
            const needed = 3 - pinnedItems.length;
            return [...pinnedItems, ...regularItems.slice(0, needed)];
        }
        
        // If no pinned items, use first 3 regular items
        return regularItems.slice(0, 3);
    };

    // Function to get remaining items for second row and beyond
    const getRemainingItems = () => {
        const firstRowIds = getFirstRowItems().map(item => item.id);
        return portfolioItems.filter(item => 
            !firstRowIds.includes(item.id) && 
            !item.isPlaceholder
        );
    };

    const firstRowItems = getFirstRowItems();
    const remainingItems = getRemainingItems();

    // Function to render a portfolio item
    const renderPortfolioItem = (item, index) => (
        <div 
            key={item.id}
            className="col-lg-4 col-md-6 portfolio-item"
            data-aos={item.animation}
            data-aos-delay={item.delay}
        >
            <div className="position-relative rounded overflow-hidden portfolio-card">
                {/* Pin indicator for pinned posts */}
                {item.isPinned && (
                    <div className="portfolio-pin-indicator">
                        <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
                        <span>Featured</span>
                    </div>
                )}
                
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
                
                {/* Blue Overlay on Hover */}
                <div className="portfolio-overlay">
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
    );

    return (
        <section className="container-fluid py-5 portfolio-section">
            <div className="container px-lg-5">
                <div className="text-center mb-4" data-aos="fade-up">
                    <div className="portfolio-badge">Portfolio</div>
                </div>
                
                <div 
                    className="section-title position-relative text-center mb-5 pb-2"
                    data-aos="fade-up"
                >
                    <h6 className="position-relative d-inline text-primary ps-4">Our Catalog</h6>
                    <h1 className="mb-4">Past Events</h1>
                </div>
                
                {/* First Row - Always 3 items */}
                <div className="row g-4 portfolio-container">
                    {firstRowItems.map((item, index) => renderPortfolioItem(item, index))}
                </div>

                {/* Remaining Items */}
                {remainingItems.length > 0 && (
                    <>
                        <div className="row g-4 portfolio-container mt-4">
                            {remainingItems.map((item, index) => renderPortfolioItem(item, index))}
                        </div>
                    </>
                )}

                <br />
                <br />
                
                <div 
                    className="row mt-n2"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
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