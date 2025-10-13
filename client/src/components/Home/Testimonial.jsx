// components/TestimonialSection.js
import React, { useEffect, useRef } from 'react';
import '../../assets/css/Home/Testimonial.css';

const TestimonialSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Owl Carousel
    if (window.$ && carouselRef.current) {
      (carouselRef.current).owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        smartSpeed: 800
      });
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "The AI solutions provided by this team transformed our business operations completely. The predictive analysis tools helped us increase efficiency by 40%.",
      image: "img/testimonial-1.jpg",
      name: "Sarah Johnson",
      profession: "CEO, TechCorp"
    },
    {
      id: 2,
      text: "Outstanding machine learning implementation! Our data processing time was reduced from hours to minutes. Highly recommended for any business looking to scale.",
      image: "img/testimonial-2.jpg",
      name: "Michael Chen",
      profession: "Data Science Director"
    },
    
  ];

  return (
    <div className="testimonial-section">
      <div className="container py-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="section-badge">Testimonial</div>
            <h2 className="section-title">A Word From Our Members</h2>
            <p className="section-description">
              Discover what our valued clients and members have to say about their experience 
              with our AI solutions and services.
            </p>
          </div>
          <div className="col-lg-8 wow fadeIn" data-wow-delay="0.3s">
            <div 
              ref={carouselRef}
              className="testimonial-carousel owl-carousel"
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <i className="quote-icon fa fa-quote-left"></i>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img 
                        className="author-avatar" 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <div className="author-info">
                        <h5 className="author-name">{testimonial.name}</h5>
                        <span className="author-profession">{testimonial.profession}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;