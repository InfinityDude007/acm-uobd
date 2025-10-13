import React from "react";
import "../assets/css/Home/Home.css";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <Testimonial />
        </div>
    );
};

export default Home;
