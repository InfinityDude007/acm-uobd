import React from "react";
import "../../assets/css/Home/Hero.css"
import heroImage from "../../assets/img/hero-img.png";
import bgHero from "../../assets/img/bg-hero.png";

const Hero = () => {
    return (
        <section
            className="container-fluid pt-5 bs-primary hero-header mb-5 animate__animated animate__fadeIn animate__delay-0.5s animate__slow"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="container pt-5">
                <div className="row g-5 pt-5">

                    <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                        <h1 className="display-4 mb-4 animate__animated animate__slideInRight animate__delay-0.5s">
                            UoBD&apos;s very own <br /> ACM Student Chapter
                        </h1>

                        <p className=" mb-4 animate__animated animate__slideInRight animate__delay-0.5s">
                            Welcome to the ACM Student Chapter at the University of Birmingham
                            Dubai, a community connecting tech enthusiasts and showcasing the
                            brilliant work of our students. Explore, connect, and create with
                            us!
                        </p>

                        <a
                            href="https://www.acm.org/membership/membership-options"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animate__animated animate__slideInRight animate__delay-0.5s"
                        >
                            Become a Member
                        </a>

                    </div>

                    <div className="col-lg-6 align-self-end text-center text-lg-end">
                        <img
                            className="img-fluid animate__animated animate__zoomIn animate__delay-0.5s"
                            src={heroImage}
                            alt="Binary Code Illustration"
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
