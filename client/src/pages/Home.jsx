import React from "react";
import "../assets/css/Home/Home.css";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Testimonial />
        </div>
    );
};

export default Home;
