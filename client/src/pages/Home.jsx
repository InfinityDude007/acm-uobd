import React from "react";
import "../assets/css/Home/Home.css";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";
import Faq from "../components/Home/Faq";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <Testimonial />
            <Faq />
            
        </div>
    );
};

export default Home;
