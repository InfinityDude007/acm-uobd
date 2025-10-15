import React from "react";
import "../assets/css/Home/Home.css";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Testimonial from "../components/Home/Testimonial";
// import Services from "../components/Services";
// import Newsletter from "../components/Newsletter";
// import CaseStudies from "../components/CaseStudies";
import Portfolio from "../components/Home/Portfolio";
// import Testimonials from "../components/Testimonials";
// import FAQs from "../components/FAQs";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Testimonial />
            <Portfolio />
            {/* <Services />
            <Newsletter />
            <CaseStudies />
            <Portfolio />
            <FAQs /> */}
        </div>
    );
};

export default Home;
