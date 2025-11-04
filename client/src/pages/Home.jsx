import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";
// import Services from "../components/Services";
// import Newsletter from "../components/Newsletter";
// import CaseStudies from "../components/CaseStudies";
import Portfolio from "../components/Home/Portfolio";
import FAQs from "../components/Home/Faq"

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonial />
            <FAQs />
        </div>
    );
};

export default Home;
