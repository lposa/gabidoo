import React, { useState } from "react";
import hero from "../assets/hero.jpg";
import hero2 from "../assets/hero2.png";
import TopDeal from "../components/TopDeal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoriesNavbar from "./CategoriesNavbar";

function Home() {
  return (
    <div>
      <Navbar />

      <CategoriesNavbar />

      <div className="hero-container">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div>
            <div className="hero-text">
              <h1>BOSCH ALATI</h1>

              <button>SAZNAJ VISE</button>
            </div>
            <img src={hero} alt="hero banner" className="hero-image" />
          </div>

          <div>
            <div className="hero-text">
              <h1>JUB</h1>

              <button>SAZNAJ VISE</button>
            </div>
            <img src={hero2} alt="hero banner" className="hero-image" />
          </div>
        </Carousel>
      </div>

      <div className="top-deal">
        <h1 style={{ textAlign: "center" }}>Promotivne ponude</h1>
        <TopDeal />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
