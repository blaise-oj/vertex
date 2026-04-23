import React, { useEffect, useState } from "react";
import "./Hero.css";

// images (replace with real refinery/mining visuals later)
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const Hero = () => {

  const slides = [
    {
      image: hero1,
      title: "Expert Gold Buyer Consultancy",
      text: "Strategic advisory and hands-on support for high-value precious metals transactions across Africa and globally."
    },
    {
      image: hero2,
      title: "FREE Ore Testing",
      text: "We provide free ore testing for miners and landowners, delivering accurate insights with no hidden costs.",
      highlights: [
        "Get Your Ore Tested for Free",
        "No Hidden Costs",
        "Better Prices and Profits"
      ]
    },
    {
      image: hero3,
      title: "Precious Metals Refining Excellence",
      text: "Gold, Silver and Platinum Group Metals refining with full assaying, verification, processing, storage and delivery services."
    },
    {
      image: hero4,
      title: "Satellite Mining Intelligence",
      text: "Advanced satellite mapping identifies high-yield mineral zones, reducing risk and improving exploration efficiency."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div
      className="hero container-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${slide.image})`,
      }}
    >

      <div className="hero-text">

        <h1 key={slide.title}>{slide.title}</h1>

        <p key={slide.text}>{slide.text}</p>

        {/* optional highlight list */}
        {slide.highlights && (
          <ul className="hero-list">
            {slide.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

      </div>

      {/* DOT NAVIGATION */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Hero;